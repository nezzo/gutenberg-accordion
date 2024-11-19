import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType("gutenberg/accordion", {
    title: "Gutenberg Accordion",
    icon: "list-view",
    category: "layout",
    supports: {
        align: ["wide", "full"],
    },
    edit: () => {
        const ALLOWED_BLOCKS = ["gutenberg/accordion-item"];

        return (
            <div className="gutenberg-accordion">
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </div>
        );
    },
    save: () => {
        return (
            <div className="gutenberg-accordion">
                <InnerBlocks.Content />
            </div>
        );
    },
});