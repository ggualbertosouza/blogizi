"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Bold, Italic, Strikethrough, Quote, List, Code, Pilcrow } from "lucide-react";

export const NoteEditor = () => {
  const extensions = [StarterKit, Underline];

  const editor = useEditor({
    extensions,
    content: "",
    editorProps: {
      attributes: {
        class: "min-h-full border rounded",
      },
    },
    onUpdate: ({ editor }) => {
      const editorContent = editor.getJSON();
    
    
    },  
  });

  const toggleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const toggleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const toggleStrike = () => {
    editor?.chain().focus().toggleStrike().run();
  };

  const setParagraph = () => {
    editor?.chain().focus().setParagraph();
  };

  const toggleBlockQuote = () => {
    editor?.chain().focus().toggleBlockquote().run();
  };

  const toggleBulletList = () => {
    editor?.chain().focus().toggleBulletList().run()
  };

  const toggleCodeBlock = () => {
    editor?.chain().focus().toggleCodeBlock().run()
  };

  return (
    <>
      <div className="p-2 border rounded flex gap-2 items-center text-sm">
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('bold') && 'bg-zinc-400'}`}
        onClick={toggleBold}>
          <Bold  />
        </button>
        <button
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('italic') && 'bg-zinc-400'}`}
        onClick={toggleItalic}>
          <Italic  />
        </button>
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('strike') && 'bg-zinc-400'}`}
        onClick={toggleStrike}>
          <Strikethrough  />
        </button>
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('paragraph') && 'bg-zinc-400'}`}
        onClick={setParagraph}>
          <Pilcrow  />
        </button>
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('quote') && 'bg-zinc-400'}`}
        onClick={toggleBlockQuote}>
          <Quote  />
        </button>
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('bulletList') && 'is-active'}`}
        onClick={toggleBulletList}>
          <List  />
        </button>
        <button 
        className={`hover:bg-zinc-400 rounded p-1 ${editor?.isActive('bold') && 'bg-zinc-400'}`}
        onClick={toggleCodeBlock}>
          <Code  />
        </button>
      </div>
      <EditorContent editor={editor} className="h-28" />
    </>
  );
};
