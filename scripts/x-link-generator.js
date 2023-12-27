const generateTwitterShareLink = (imageURL) => {
      const text = 'Check out this image: ' + imageURL;
      return `
        https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}
      `;
};
    
export default generateTwitterShareLink;