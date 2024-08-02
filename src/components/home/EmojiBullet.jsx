import { Box } from "@mui/material";

export const EmojiBullet = ({ emoji, text, link, id, onClick }) => {
  const commonBoxStyles = {
    fontSize: '1rem',
    lineHeight: 1.5,
    cursor: 'default'
  };

  const commonLinkStyles = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <Box component="li" sx={commonBoxStyles}>
      <Box
        component="span"
        aria-label={emoji}
        role="img"
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize="1.5rem"
      >
        {emoji}
      </Box>
      <a 
        href={link || "#"}
        onClick={handleClick}
        style={commonLinkStyles}
        {...(link && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {text}
      </a>
    </Box>
  );
};