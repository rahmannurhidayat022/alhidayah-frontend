const resolveApiPath = ({ baseUrl, query, url }) => {
  let validUrl = url === undefined || url === null ? baseUrl : url;
  const validQuery = query === undefined || query === null ? undefined : query;

  if (validQuery !== undefined) {
    validUrl = validUrl + "?search=" + validQuery;
  }

  return validUrl;
};

export default resolveApiPath;
