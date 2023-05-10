import useSWR from "swr";

const apiArticle = (option: string) => {
    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data, error } = useSWR(
        `https://api.nytimes.com/svc/mostpopular/v2/${option}/7.json?api-key=yUyYf6ipOOgP0oE7Dly5tgP7WaL4afEt`,
        fetcher
    );
    return { data, error }
};

export default apiArticle;