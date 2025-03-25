export type PathParams<T = unknown> = {
  params: Promise<T>;
};

export type SearchParams<T = { [key: string]: string | string[] | undefined }> = {
  searchParams: Promise<T>;
};
