<?php
/*
Plugin Name: Gutenberg Accordion Plugin
Description: A custom Gutenberg block for creating responsive accordions.
Version: 1.0.0
Author: Artur Lehusha
*/

if (!defined("ABSPATH")){
    exit; // Exit if accessed directly.
}

function gutenberg_accordion_register_block() {
    $asset_file = include(plugin_dir_path( __FILE__) . "build/index.asset.php");

    wp_register_script(
        "gutenberg-accordion-block",
        plugins_url("build/index.js", __FILE__),
        $asset_file["dependencies"],
        $asset_file["version"]
    );

    wp_register_style(
        "gutenberg-accordion-style",
        plugins_url("build/style-index.css", __FILE__),
        [],
        filemtime(plugin_dir_path( __FILE__) . "build/style-index.css")
    );

    wp_register_style(
        "gutenberg-accordion-editor-style",
        plugins_url("build/index.css", __FILE__),
        ["wp-edit-blocks"],
        filemtime(plugin_dir_path( __FILE__) . "build/index.css")
    );

    register_block_type("gutenberg/accordion", [
        "editor_script" => "gutenberg-accordion-block",
        "style"         => "gutenberg-accordion-style",
        "editor_style"  => "gutenberg-accordion-editor-style",
    ] );
}
add_action("init", "gutenberg_accordion_register_block");

function gutenberg_accordion_enqueue_scripts() {
    wp_enqueue_style(
        "bootstrap-css",
        plugin_dir_url(__FILE__) . "node_modules/bootstrap/dist/css/bootstrap.min.css",
        [],
        null
    );

    wp_enqueue_script(
        "bootstrap-js",
        plugin_dir_url(__FILE__) . "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        [],
        null,
        true
    );
}
add_action("wp_enqueue_scripts", "gutenberg_accordion_enqueue_scripts");