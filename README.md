# Proctor Fellows — Alumni Directory

A single searchable page listing all Proctor fellowship alumni. It reads its data from
`fellows.json` and its photos from the `img/` folder. Built to be hosted on GitHub Pages
and embedded into the Proctor Drupal site with an iframe.

## Files
- `index.html` — the page (search, filters, expanding cards). Don't edit unless changing layout.
- `fellows.json` — the data. **This is the file you edit to add/update fellows.**
- `img/` — the photos (135 files), named `surname-firstname.jpg`.

---

## 1. Put it on GitHub Pages

1. Create a new repository (e.g. `proctor-fellows`).
2. Upload `index.html`, `fellows.json`, and the whole `img/` folder.
3. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` and `/ (root)`, Save.
4. After a minute your page is live at:
   `https://<your-username>.github.io/proctor-fellows/`

That URL is what you embed in Drupal.

> Note: the page must be *served* (http/https). Opening `index.html` by double-click
> won't load the data — that's expected. GitHub Pages serves it correctly.

---

## 2. Embed it in the Drupal fellows page

In the Drupal page body (Full HTML / Source view), paste:

```html
<iframe id="proctor-fellows"
        src="https://<your-username>.github.io/proctor-fellows/"
        style="width:100%; border:0; height:1200px;"
        title="Proctor Fellows Alumni Directory"
        loading="lazy"></iframe>
```

That works as-is with a fixed height and its own internal scroll.

### Optional: make the iframe auto-grow (no inner scrollbar)
The page already reports its height to the parent. If you can add a small script to the
Drupal page, the iframe will resize to fit its content:

```html
<script>
window.addEventListener('message', function(e){
  if(e.data && e.data.proctorFellowsHeight){
    var f=document.getElementById('proctor-fellows');
    if(f) f.style.height = e.data.proctorFellowsHeight + 'px';
  }
});
</script>
```

---

## 3. Add or update a fellow

Edit `fellows.json`. Each entry looks like this:

```json
{
  "name": "Jane Doe, MD",
  "years": "2015\u201316",
  "decade": "2010s",
  "country": "",
  "photo": "doe-jane.jpg",
  "role": "",
  "schooling": ["Harvard Medical School, MD", "UCSF, Residency"],
  "position": "Assistant Professor, Somewhere Eye Institute",
  "publications": ["Doe J, et al. Title. Journal. 2016."],
  "links": ["https://example.org/janedoe"]
}
```

- **photo** — the filename in `img/`. Leave `""` to show a placeholder silhouette.
- **position** — leave `""` if unknown (nothing shows). No need to note "retired."
- **publications** — one string per publication (add their Proctor-years papers here).
- **country** — feeds the country filter and shows on the card.

To add a new person: add their photo to `img/`, then add a JSON entry pointing at it.
That's the whole workflow.

---

## Still to finish (from the build)
- Fill in `position` and `publications` over time (they start blank).
- Link the ~name-variant photos flagged in the gap report (e.g. Feiler, De Luise).
- Resolve the two pending photo picks: **Endliam Chowchuvech** (4 files) and **Gilmer** (2 files).
- Decide which of the unmatched photos are faculty vs. fellows missing from the list.
