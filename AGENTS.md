<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application conventions
- Public content pages use TanStack file routes and a shared Samiti shell to keep navigation and visual identity consistent.
- Keep this design phase frontend-only: payment, membership registration and enquiries must not claim submission or payment success without connected services.
- Use semantic visual tokens and shared Button variants for all new interface controls.
