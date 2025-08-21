import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";

const BlogForm = ({ initialData }) => {
  // Initialize content from HTML if editing an existing post
  const [formData, setFormData] = useState(() => {
    if (initialData) {
      return {
        title: initialData.title,
        // Store raw content for editing
        content: initialData.content,
      };
    }
    return {
      title: "",
      content: "",
    };
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("title", formData.title);

    // Apply direct HTML formatting here
    // Process headings first, before handling other formatting
    const htmlContent = `<div>
      ${formData.content
        .replace(
          /^## (.*?)$/gm,
          '<h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">$1</h2>'
        )
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\n\n/g, "</p><p>")
        .replace(/\n/g, "<br />")}
    </div>`;

    // Clean up the HTML to handle paragraph tags properly
    const cleanedHtml = htmlContent
      .replace("<div><p>", "<div>") // Remove first paragraph open if present
      .replace("</p></div>", "</div>") // Remove last paragraph close if present
      .replace("<div>", "<div><p>") // Add opening paragraph
      .replace("</div>", "</p></div>"); // Add closing paragraph

    formPayload.append("content", cleanedHtml);

    if (imageFile) formPayload.append("image", imageFile);

    try {
      if (initialData) {
        await api.put(`/Blogs/${initialData._id}`, formPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/Blogs", formPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      navigate("/Dashboard");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Insert formatting at cursor position or around selected text
  const formatText = (formatType) => {
    const textarea = document.getElementById("blog-content");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);

    let before = "";
    let after = "";

    switch (formatType) {
      case "h2":
        // Make sure to add a newline before and after the heading for proper formatting
        before =
          start > 0 && formData.content[start - 1] !== "\n" ? "\n## " : "## ";
        after =
          end < formData.content.length && formData.content[end] !== "\n"
            ? "\n\n"
            : "\n";
        break;
      case "bold":
        before = "**";
        after = "**";
        break;
      case "italic":
        before = "*";
        after = "*";
        break;
      case "paragraph":
        before = "\n\n";
        after = "";
        break;
      default:
        break;
    }

    const newContent =
      formData.content.substring(0, start) +
      before +
      (selectedText ||
        (formatType === "h2"
          ? "Subheading"
          : formatType === "bold"
          ? "bold text"
          : formatType === "italic"
          ? "italic text"
          : "")) +
      after +
      formData.content.substring(end);

    setFormData({ ...formData, content: newContent });

    // Set cursor position after inserting
    setTimeout(() => {
      textarea.focus();
      const newPosition =
        start +
        before.length +
        (selectedText.length ||
          (formatType === "h2"
            ? "Subheading".length
            : formatType === "bold"
            ? "bold text".length
            : formatType === "italic"
            ? "italic text".length
            : 0));
      textarea.setSelectionRange(newPosition, newPosition);
    }, 10);
  };

  // Custom styling for the preview section
  const previewStyles = `
    .preview-content h2 {
      font-size: 1.5em;
      font-weight: bold;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }
    .preview-content p {
      margin-bottom: 1em;
    }
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {/* Add style tag for preview styling */}
      <style>{previewStyles}</style>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-gray-700 text-sm font-bold">
            Content
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => formatText("h2")}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold"
              title="Add Subheading"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => formatText("bold")}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold"
              title="Bold Text"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => formatText("italic")}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm italic"
              title="Italic Text"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => formatText("paragraph")}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              title="Add Paragraph Break"
            >
              ¶
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-2">
          Format text using markdown: ## for headings, ** for bold, * for
          italic. Double line breaks create new paragraphs.
        </div>

        <textarea
          id="blog-content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="w-full h-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono whitespace-pre-wrap"
          required
        />

        {/* Preview Section with enhanced styling */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b">
            Preview
          </div>
          <div
            className="p-4 prose prose-sm max-w-none preview-content"
            dangerouslySetInnerHTML={{
              __html: formData.content
                .replace(/^## (.*?)$/gm, "<h2>$1</h2>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(/\n\n/g, "</p><p>")
                .replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {initialData?.image?.url && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Current Image:</p>
            <img
              src={initialData.image.url}
              alt="Current blog"
              className="h-32 w-auto rounded-lg"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Save Blog Post"}
      </button>
    </form>
  );
};
BlogForm.propTypes = {
  initialData: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    _id: PropTypes.string,
  }),
};

export default BlogForm;
