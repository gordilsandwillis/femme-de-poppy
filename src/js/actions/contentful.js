

export const CONTENTFUL_CLIENT_CREATED = 'CONTENTFUL_CLIENT_CREATED';

export const FETCH_SITE_INFO = 'FETCH_SITE_INFO';
export const FETCH_PAGES = 'FETCH_PAGES';

export const SITE_INFO_FOUND = 'SITE_INFO_FOUND';
export const PAGES_FOUND = 'PAGES_FOUND';


export const fetchSiteInfo = () => {
	return (dispatch, getState) => {
    console.log(getState());
		const { client } = getState();
   	const params = Object.assign({'content_type' : 'site'});
  	client.getEntries(params).then( (res) => {
    	dispatch({type : SITE_INFO_FOUND, payload : res});
  	});
	}
}


export const fetchPages = () => {
	return (dispatch, getState) => {
        console.log(getState());

		const { client } = getState();
  	const params = Object.assign({'content_type' : 'page'});
  	client.getEntries(params).then( (res) => {
    	dispatch({type : PAGES_FOUND, payload : res});
  	});
	}
}