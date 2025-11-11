# Git & GitHub Quick Cheat Sheet

A tiny, printable cheat-sheet with the exact commands for the common workflow we used.
Run these in your project folder (where `.git` lives): `/home/barden/Documents/app-template`.

---

## Inspect repository
```bash
git status
git branch --show-current
git remote -v
git fetch --all --prune
```

## Sync main and create a feature branch
```bash
git checkout main
git pull origin main
git checkout -b feature/<short-name>
```

## Make edits
- Edit files in your editor (e.g. `src/components/Header.astro`).

## Stage and commit
```bash
git add <file1> <file2>
git add -A        # stage everything
git commit -m "Short, descriptive message"
```

## Push and open a Pull Request
```bash
git push -u origin feature/<short-name>
```
- Then open GitHub and create a Pull Request from your branch into `main`.

## After the PR is merged
```bash
git checkout main
git pull origin main
git branch -d feature/<short-name>   # optional, deletes local branch
```

## Preview the site locally
```bash
npm install          # only first time or after package changes
npm run dev
```
- The terminal will show a local URL (e.g. `http://localhost:4321/`). Open it in your browser.

## Handy commands
```bash
git log --oneline --graph -n 10
git checkout -- <file>      # discard local changes to a file
git reset --soft HEAD~1     # undo last commit but keep changes staged
```

---

If you want this snippet added to the main `README.md` instead, or formatted differently for printing, tell me and I will update it.
