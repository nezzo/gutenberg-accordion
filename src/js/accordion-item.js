import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

registerBlockType("gutenberg/accordion-item", {
    title: "Gutenberg Accordion Item",
    icon: "editor-ul",
    category: "layout",
    parent: ["gutenberg/accordion"],
    attributes: {
        title: {type: "string", source: "html", selector: ".accordion-title"},
        content: {type: "string", source: "html", selector: ".accordion-content"},
    },
    edit: ({attributes, setAttributes}) => {
        const {title, content} = attributes;

        return (
            <div className="accordion-item">
                <RichText
                    tagName="h4"
                    className="accordion-title"
                    value={title}
                    onChange={(value) => setAttributes({title: value})}
                    placeholder="Enter title..."
                />
                <RichText
                    tagName="div"
                    className="accordion-content"
                    value={content}
                    onChange={(value) => setAttributes({content: value})}
                    placeholder="Enter content..."
                />
            </div>
        );
    },
    save: ({attributes}) => {
        const {title, content} = attributes;

        return (
            <div className="accordion-item">
                <h4 className="accordion-title">{title}</h4>
                <div className="accordion-content">{content}</div>
            </div>
        );
    },
});
