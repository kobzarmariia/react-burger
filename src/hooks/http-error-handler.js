import { useState, useEffect } from 'react';

export default httpClient => {
	const [error, setError] = useState(null);

	const reqInterceptor = httpClient.interceptors.request.use(null, req => {
		setError(null);
		return req;
	});

	const resInterceptor = httpClient.interceptors.response.use(
		res => res,
		err => {
			setError(err);
		}
	);

	useEffect(() => {
		return () => {
			httpClient.interceptors.request.eject(reqInterceptor);
			httpClient.interceptors.response.eject(resInterceptor);
		};
		// eslint-disable-next-line
	}, [reqInterceptor, resInterceptor]);

	const errorConfirmedHandler = () => {
		setError(null);
	};

	return [error, errorConfirmedHandler];
};
