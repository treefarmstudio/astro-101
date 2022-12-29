export function generateSlug(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateCategoryData(categories) {
  return categories.map((category) => ({
    name: category,
    slug: `${generateSlug(category)}`,
  }));
}
