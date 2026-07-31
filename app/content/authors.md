---
manasa:
  name: "Manasa"
  role: "Subject Matter Expert"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRzh4cB2lg4zaCJZjr0qd5wBPFpoLnckncZE3cJdgg&s=10"
  posts:
    - "ai-powered-advertising"
abhiram:
  name: "Abhiram"
  role: "Subject Matter Expert"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRzh4cB2lg4zaCJZjr0qd5wBPFpoLnckncZE3cJdgg&s=10"
  posts:
    - "direct-vs-programmatic-advertising"
manju:
  name: "Manju"
  role: "Subject Matter Expert"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRzh4cB2lg4zaCJZjr0qd5wBPFpoLnckncZE3cJdgg&s=10"
  posts:
    - "ad-operations-ai-guide"
sankeerth:
  name: "Sankeerth"
  role: "Subject Matter Expert"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRzh4cB2lg4zaCJZjr0qd5wBPFpoLnckncZE3cJdgg&s=10"
  posts:
    - "real-time-bidding-rtb"
    - "why-brands-choose-adrefresh"
srija:
  name: "Srija"
  role: "Subject Matter Expert"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRzh4cB2lg4zaCJZjr0qd5wBPFpoLnckncZE3cJdgg&s=10"
  posts:
    - "ad-operations-team-role"
---
This file is the single source of truth for both employee details AND which
posts they wrote. A blog post's own .md file has no author field at all —
this file's `posts` list is what links a slug back to its author. To assign
a new post to someone, add its slug to their `posts` array here; to reassign
a post to a different author, move its slug from one person's list to
another's. Nothing needs to change in the blog post file itself.
