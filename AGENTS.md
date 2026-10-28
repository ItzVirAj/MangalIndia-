# AGENTS.md — Standing Rules for the Mangal India Website

Every task on this repository must follow these standing rules without exception:

1. **Read Docs & Apply Design Skill First**: Read `docs/DESIGN.md` and `docs/CONTENT.md` before starting any task, and apply the `frontend-design` skill.
2. **Strict Content Fidelity**: Copy comes only from the `data/` layer, word for word. Never invent copy, numbers, contacts or addresses. Unknown items use the `confirm()` helper.
3. **Exclude Internal Notes**: Never publish text from `INTERNAL NOTE`, `VISUAL DIRECTION` or `VERIFY` boxes.
4. **Design Tokens Only**: No hard-coded colours, font sizes or radii in components; use design tokens.
5. **Accessibility & Semantics**: Semantic HTML, one `h1` per page, visible focus, respect `prefers-reduced-motion`.
6. **Performant Motion & Cleanup**: Only animate `transform`, `opacity` and SVG stroke properties. Clean up every GSAP context on unmount.
7. **Component Modularity**: Keep components under 200 lines; one component per file.
8. **Task Completion Protocol**: End every task with `typecheck`, `lint` and `build`, a 5-line summary and a git commit. Do not start the next task.
