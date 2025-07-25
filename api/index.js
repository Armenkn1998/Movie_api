const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
	origin: 'https://movie-5oz5.vercel.app', // or set to your frontend domain
  }));
app.use(express.json());
const data = {
    "Featured": {
		"id": 1,
		"Title": "The Irishman",
		"CoverImage": "FeaturedCoverImage.png",
		"TitleImage": "FeaturedTitleImage.png",
		"Date": "2021-10-24T12:16:50.894556",
		"ReleaseYear": "2021",
		"MpaRating": "18+",
		"Category": "Movie",
		"Duration": "6000",
		"Description": "Info About it"
	},
	"TendingNow": [
		{
			"id": 1,
			"Title": "Title 1",
			"CoverImage": "https_specials-1.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-24T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "2000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 2,
			"Title": "Title 2",
			"CoverImage": "https_specials-2.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-12T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "2300",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 3,
			"Title": "Title 3",
			"CoverImage": "https_specials-3.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-11T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "6000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 4,
			"Title": "Title 4",
			"CoverImage": "https_specials-4.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-10T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "4000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 5,
			"Title": "Title 5",
			"CoverImage": "https_specials-5.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-15T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "5300",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 6,
			"Title": "Title 6",
			"CoverImage": "https_specials-6.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-10-22T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "1200",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 7,
			"Title": "Title 7",
			"CoverImage": "https_specials-7.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-11-22T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "4500",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 8,
			"Title": "Title 8",
			"CoverImage": "https_specials-8.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-07-14T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "2000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 9,
			"Title": "Title 9",
			"CoverImage": "https_specials-1.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-04-03T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "2300",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 10,
			"Title": "Title 10",
			"CoverImage": "https_specials-2.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-11-23T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "6000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 11,
			"Title": "Title 11",
			"CoverImage": "https_specials-3.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-11-04T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "1200",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 12,
			"Title": "Title 12",
			"CoverImage": "https_specials-4.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-03-03T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "3400",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 13,
			"Title": "Title 13",
			"CoverImage": "https_specials-5.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-12-30T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "6500",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 14,
			"Title": "Title 14",
			"CoverImage": "https_specials-6.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-07-10T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "5000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 15,
			"Title": "Title 15",
			"CoverImage": "https_specials-7.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-05-14T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "1300",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 16,
			"Title": "Title 16",
			"CoverImage": "https_specials-8.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-03-25T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "Movie",
			"Duration": "5000",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 17,
			"Title": "Title 17",
			"CoverImage": "https_specials-1.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-08-24T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "400",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		},
		{
			"id": 18,
			"Title": "Title 18",
			"CoverImage": "https_specials-2.png",
			"TitleImage": "FeaturedTitleImage.png",
			"Date": "2021-07-21T12:16:50.894556",
			"ReleaseYear": "2021",
			"MpaRating": "18+",
			"Category": "TV Show",
			"Duration": "1200",
			"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
			"Description": "Info About it"
		}
	]
};


app.get("/api/Featured", (req, res) => {
	res.json(data.Featured);
  });
  
  app.get("/api/TendingNow", (req, res) => {
	res.json(data.TendingNow);
  });
  
  app.get("/api/TendingNow/:id", (req, res) => {
	const id = Number(req.params.id);
	const item = data.TendingNow.find((x) => x.id === id);
	if (item) {
	  res.json(item);
	} else {
	  res.status(404).json({ error: "Not found" });
	}
  });
  
  app.put("/api/Featured", (req, res) => {
	data.Featured = { ...data.Featured, ...req.body };
	res.json(data.Featured);
  });
  
  // Vercel handler export
  module.exports = app;