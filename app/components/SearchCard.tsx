import {
  useContext,
} from 'react';

import {
  Button,
  Card,
  IconButton,
  Typography,
} from '@material-tailwind/react';

import {
  Star,
  StarSolid,
} from 'iconoir-react';

import DarkModeContext from '../contexts/DarkModeContext';

/**
 * Renders a dynamic algorithm card to be displayed inside of a
 * `SearchProvider` element.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.img
 *        The image URL to display
 * @param {string} props.title
 *        The title to display
 * @param {string[]} props.tags
 *        The tags to display
 * @param {string} props.href
 *        The URL to navigate to when the card is clicked
 * @param {string[]} props.favs
 *        The list of currently favorited algorithms
 * @param {function} props.toggleFav
 *        A function to toggle the favorite state of an algorithm
 * @param {string[]} props.activeTags
 *        The currently active tags
 * @param {function} props.toggleTag
 *        A function to toggle the active state of a tag
 */
export default function SearchCard(
  {
    img,
    title,
    tags,
    href,
    favs,
    toggleFav,
    activeTags,
    toggleTag,
  }:
  {
    img: string
    title: string
    tags: string[]
    href: string
    favs: string[] | null
    toggleFav: (key: string) => void
    activeTags: string[] | null
    toggleTag: (tag: string) => void
  },
) {
  const isDark = useContext(DarkModeContext);

  return (
    <Card
      as="a"
      href={href}
      className="w-76 p-4 border-transparent shadow-none overflow-visible transition-all duration-300 bg-transparent hover:bg-primary/5 hover:border-secondary"
    >
      <Card.Header
        as="img"
        src={img}
        alt={`${title} - Preview Image`}
        className="m-0 w-full"
      />
      <Card.Body className="flex justify-between items-center p-0 my-2">
        <Typography
          type="h2"
          className="text-lg! font-medium"
        >
          {title}
        </Typography>
        <IconButton
          variant="ghost"
          aria-label={(favs || []).includes(title) ? 'Remove from favorites' : 'Add to favorites'}
          title={(favs || []).includes(title) ? 'Remove from favorites' : 'Add to favorites'}
          onClick={
            (e) => {
              toggleFav(title);
              e.preventDefault();
            }
          }
          className="translate-x-2 border-0 hover:bg-transparent cursor-pointer"
        >
          {
            (favs || []).includes(title) ?
              (
                <StarSolid
                  color={(isDark || false) ? 'yellow' : 'dodgerblue'}
                  className="stroke-2 w-5 h-5"
                  role="presentation"
                />
              ) :
              <Star className="stroke-2 w-5 h-5" role="presentation" />
          }
        </IconButton>
      </Card.Body>
      <Card.Footer className="flex flex-wrap gap-1 p-0">
        {
          tags.map(
            tag => (
              <Button
                key={tag}
                size="xs"
                variant="outline"
                onClick={
                  (e) => {
                    toggleTag(tag);
                    e.preventDefault();
                  }
                }
                aria-label={`Toggle "${tag}" tag filter`}
                title={`Toggle "${tag}" tag filter`}
                className={`text-xs shadow-none ${(activeTags || []).includes(tag) && 'bg-primary text-primary-foreground'} cursor-pointer`}
              >
                {tag}
              </Button>
            ),
          ).sort((a, b) => a.props.children.localeCompare(b.props.children))
        }
      </Card.Footer>
    </Card>
  );
}
