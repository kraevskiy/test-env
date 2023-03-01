import React from 'react';
import { LayoutProps } from './Layout.props';

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
	return (
		<div className="container mx-auto py-5" {...props}>
			<div className="text-4xl font-black">Materials</div>
		</div>
	);
};
