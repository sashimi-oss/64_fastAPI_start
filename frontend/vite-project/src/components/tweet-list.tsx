import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../action/tweet";
import { tweetsSelector } from "../reducer/store";
import type { AppDispatch } from "../reducer/store";

const TweetList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { list, loading, error} = useSelector(tweetsSelector);
	
	useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);

	if (loading) return <p>loading...</p>
	if (error) return <p>{error}</p>

	return (
		<>
			<p>tweet一覧</p>
			<ul>
				{list.map((tweet) => (
					<li key={tweet.tweet_id}>{tweet.content}</li>
				))}
			</ul>
		</>
	);
};
export default TweetList;