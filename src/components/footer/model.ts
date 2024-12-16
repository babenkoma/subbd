interface FooterModel {
	copyright: string;
}

export function useFooter(): FooterModel {
	return {
		copyright: `© ${new Date().getFullYear()}`,
	};
}
