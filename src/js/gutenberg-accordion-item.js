import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

registerBlockType("gutenberg/accordion-item", {
    title: "Gutenberg Accordion Item",
    icon: "editor-ul",
    category: "layout",
    parent: ["gutenberg/accordion"],
    attributes: {
        title: { type: "string", source: "html", selector: ".accordion-title" },
        content: { type: "string", source: "html", selector: ".accordion-content" },
    },
    edit: ({ attributes, setAttributes }) => {
        const { title, content } = attributes;

        return (
            <div className="accordion-item">
                <RichText
                    tagName="h4"
                    className="accordion-title"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder="Enter title..."
                    allowedFormats={[]}
                />
                <RichText
                    tagName="p"
                    className="accordion-content"
                    value={content}
                    onChange={(value) => setAttributes({ content: value })}
                    placeholder="Enter content..."
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const { title, content } = attributes;
        const uniqueId = Math.random().toString(36).substr(2, 9);

        return (
            <div className="accordion">
                <div className="accordion-item">
                    <h4 className="accordion-header" id={`heading-${uniqueId}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${uniqueId}`} aria-expanded="false" aria-controls={`collapse-${uniqueId}`}>
                            {title}
                        </button>
                    </h4>
                    <div id={`collapse-${uniqueId}`} className="accordion-collapse collapse" aria-labelledby={`heading-${uniqueId}`}>
                        <div className="accordion-body">
                            <RichText.Content tagName="p" className="accordion-content" value={content} />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});