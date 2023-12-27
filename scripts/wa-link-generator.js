const generateWhatsAppShareLink = (imageURL) => {
    const text = 'Check out this image: ' + imageURL;
    return `
        https://wa.me/?text=${encodeURIComponent(text)}
      `;
};

export default generateWhatsAppShareLink;