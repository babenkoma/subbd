interface HeaderModel {
	siteTitle: string;
}

export function useHeader(): HeaderModel {
	return {
		siteTitle: 'Hello, World!',
	};
}
