import { Post, User } from './types';

// Dummy Users
export const dummyUsers: User[] = [
  {
    id: "u1",
    username: "alice_codes",
    name: "Alice Johnson",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bio: "Full-stack developer passionate about React and Node.js"
  },
  {
    id: "u2",
    username: "bob_designer",
    name: "Bob Smith",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "UI/UX designer with a love for clean interfaces"
  },
  {
    id: "u3",
    username: "charlie_dev",
    name: "Charlie Brown",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Backend engineer specializing in Python and databases"
  },
  {
    id: "u4",
    username: "diana_artist",
    name: "Diana Wilson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Digital artist and creative coder"
  },
  {
    id: "u5",
    username: "eve_startup",
    name: "Eve Garcia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    bio: "Entrepreneur building the next big thing"
  }
];

// Helper function to get user by ID
const getUserById = (id: string): User => dummyUsers.find(user => user.id === id)!;

// Dummy Posts
export const dummyPosts: Post[] = [
  // Root posts (no parent)
  {
    id: "p1",
    createdAt: "2024-01-20T10:00:00Z",
    content: "Just shipped a new feature using React hooks! The new useEffect cleanup is a game changer. 🚀",
    user_id: "u1",
    user: getUserById("u1"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p2",
    createdAt: "2024-01-20T11:30:00Z",
    content: "Working on some new UI designs. Loving the direction this project is taking! What do you think about glassmorphism?",
    user_id: "u2",
    user: getUserById("u2"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p3",
    createdAt: "2024-01-20T14:15:00Z",
    content: "Database optimization day! Just reduced query time by 60% with proper indexing. Sometimes the classics are the best approach.",
    user_id: "u3",
    user: getUserById("u3"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p4",
    createdAt: "2024-01-20T16:45:00Z",
    content: "Created this amazing digital artwork using Processing.js. The intersection of code and art never ceases to amaze me ✨",
    user_id: "u4",
    user: getUserById("u4"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p5",
    createdAt: "2024-01-21T09:20:00Z",
    content: "Building something exciting! Can't share details yet, but it's going to change how people think about social networking. Stay tuned! 👀",
    user_id: "u5",
    user: getUserById("u5"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p6",
    createdAt: "2024-01-21T12:00:00Z",
    content: "Anyone else obsessed with TypeScript's utility types? Pick<Omit<...>> is my new favorite pattern.",
    user_id: "u1",
    user: getUserById("u1"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p7",
    createdAt: "2024-01-21T15:30:00Z",
    content: "Just discovered a great design system that handles dark mode transitions beautifully. The attention to detail is incredible!",
    user_id: "u2",
    user: getUserById("u2"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p8",
    createdAt: "2024-01-21T18:00:00Z",
    content: "Microservices architecture question: How do you handle distributed transactions in your systems?",
    user_id: "u3",
    user: getUserById("u3"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p9",
    createdAt: "2024-01-22T08:45:00Z",
    content: "Experimenting with generative art algorithms. The possibilities are endless when code meets creativity! 🎨",
    user_id: "u4",
    user: getUserById("u4"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p10",
    createdAt: "2024-01-22T11:15:00Z",
    content: "Pitch practice session done! Getting better at explaining complex ideas simply. Any tips from experienced founders?",
    user_id: "u5",
    user: getUserById("u5"),
    parent_id: null,
    parent: null,
    replies: []
  },
  // Reply posts
  {
    id: "p11",
    createdAt: "2024-01-20T10:30:00Z",
    content: "Love it! The cleanup function prevents so many memory leaks. Have you tried the new React 18 features yet?",
    user_id: "u3",
    user: getUserById("u3"),
    parent_id: "p1",
    parent: null, // Will be set after all posts are created
    replies: []
  },
  {
    id: "p12",
    createdAt: "2024-01-20T12:00:00Z",
    content: "Glassmorphism is beautiful but can be tricky with accessibility. Make sure to test contrast ratios!",
    user_id: "u4",
    user: getUserById("u4"),
    parent_id: "p2",
    parent: null,
    replies: []
  },
  {
    id: "p13",
    createdAt: "2024-01-20T15:00:00Z",
    content: "Indexing is indeed powerful! What database are you using? PostgreSQL's partial indexes are amazing too.",
    user_id: "u1",
    user: getUserById("u1"),
    parent_id: "p3",
    parent: null,
    replies: []
  },
  {
    id: "p14",
    createdAt: "2024-01-21T13:00:00Z",
    content: "The Exclude utility type is also incredibly useful! TypeScript keeps getting better.",
    user_id: "u2",
    user: getUserById("u2"),
    parent_id: "p6",
    parent: null,
    replies: []
  },
  {
    id: "p15",
    createdAt: "2024-01-21T19:00:00Z",
    content: "We use saga pattern for distributed transactions. Works well but adds complexity. What about event sourcing?",
    user_id: "u5",
    user: getUserById("u5"),
    parent_id: "p8",
    parent: null,
    replies: []
  }
];

// Set up parent references and replies arrays
const postsMap = new Map(dummyPosts.map(post => [post.id, post]));

dummyPosts.forEach(post => {
  if (post.parent_id) {
    const parentPost = postsMap.get(post.parent_id);
    if (parentPost) {
      post.parent = parentPost;
      parentPost.replies.push(post);
    }
  }
});
