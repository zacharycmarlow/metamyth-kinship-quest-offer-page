---
name: Static preview CSS cache
description: Ensure stylesheet edits appear in the Replit preview of the static site.
---

When visual CSS changes appear missing in the static site preview, the open preview may still use a cached stylesheet even after the file changes. Change the stylesheet query string in the relevant page and restart the workflow to force a fresh load.

**Why:** Repeated portrait styling edits remained visually stale until the linked stylesheet URL changed; the workflow logs showed cached responses.

**How to apply:** For changes to shared CSS, update the stylesheet query string on the affected page versions and restart the configured static workflow before asking the user to verify.
