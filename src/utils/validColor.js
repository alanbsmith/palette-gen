function validColor(value) {
  const validHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return validHex.test(value);
}

export default validColor;
