## NewsExplorer (Frontend Only)

NewsExplorer is a React single-page application that lets users search for news articles via an external API and view a list of saved articles (mocked for now, no real backend).

### Tech Stack

- React with functional components and hooks (`useState`, `useEffect`)
- React Router (`react-router-dom`) for routing between `/` and `/saved-news`
- Vite as the build tool
- Plain CSS modules per component
- Mock API utilities in `src/utils` for news search, auth, and saved items

### Features

- Search for news articles by keyword
- Show a loading preloader while fetching
- Paginated "Show more" behavior for search results (3 at a time)
- Separate "Saved articles" page using mocked saved items
- Mock authentication flow (sign in / register) with fake token and user data

### Running the Project

1. Install dependencies:
	- `npm install`
2. Start the dev server:
	- `npm run dev`

### Deployment

GitHub Pages link (to be added):

**Live demo:** _TBD – add GitHub Pages URL here_

