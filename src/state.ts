export const state = {
  user: { id: 'abc123', name: 'Adam Jahr' },
  categories: [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
  ],
  events: [],
  errors: {
    fetchEvents: null
  },
}

export type State = typeof state