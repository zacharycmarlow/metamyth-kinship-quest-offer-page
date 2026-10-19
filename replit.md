# Running this project on Replit

The app is a static HTML/CSS/JavaScript site. No package installation, build step, or environment secrets are required.

The Replit workflow serves the `Metamyth Offer Deck` directory on port 5000 with Python's built-in HTTP server. The default page is `Metamyth Offer Deck/index.html`, copied from the current `Metamyth v3.html` landing page. Other pages in that directory include `Journey.html`, `Expedition.html`, and `Kinship Quest.html`.

To run it manually from the workspace root:

```sh
cd "Metamyth Offer Deck" && python3 -m http.server 5000 --bind 0.0.0.0
```
