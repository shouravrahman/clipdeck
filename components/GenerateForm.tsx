"use client";

import { Loader2, VideoIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import { Card } from "./ui/card";
import { CreatePowerpoint } from "@/app/generate/actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function GenerateForm() {
	const { toast } = useToast();
	const router = useRouter();
	const [url, setUrl] = useState<string | null>("");
	const [isValid, setIsValid] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const validateYouTubeUrl = (url: string) => {
		const pattern =
			/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
		return pattern.test(url);
	};

	const getVideoId = (url: string) => {
		const match = url.match(
			/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
		);
		return match ? match[1] : null;
	};

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newUrl = e.target.value.trim();

		if (!newUrl) {
			setError(null);
			setIsValid(false);
			return;
		}

		setUrl(newUrl);

		const videoId = getVideoId(newUrl);
		if (validateYouTubeUrl(newUrl) && videoId) {
			setError(null);
			setIsValid(true);
		} else {
			setError("Invalid YouTube URL");
			setIsValid(false);
		}
	};

	const handleGenerate = async () => {
		if (!url) {
			setError("Please enter a valid YouTube URL");
			return;
		}

		if (!isValid) {
			setError("Invalid YouTube URL");
			return;
		}

		setError(null);

		const videoId = getVideoId(url || "");
		if (!videoId) {
			setError("Invalid YouTube URL");
			return;
		}

		setIsLoading(true);

		try {
			const result = await CreatePowerpoint(videoId);
			if (!result.success) {
				toast({
					title: "Something went wrong",
					description: "Please try again later",
					variant: "destructive",
				});
			}

			router.push(`/dashboard`);
		} catch (error) {
			console.error(error);
			toast({
				title: "Something went wrong",
				description: "Please try again later",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 py-12">
			<MaxWidthWrapper>
				<div className="max-w-3xl mx-auto">
					<h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
						Create Stunning Presentations
						<span className="block text-lg font-normal text-gray-700 mt-2">
							Transform any YouTube video into a professional
							PowerPoint
						</span>
					</h1>
					<Card className="p-8 shadow-2xl bg-white rounded-lg border border-gray-200">
						{isValid ? (
							<div className="mb-8 aspect-video rounded-lg overflow-hidden shadow-lg">
								<iframe
									className="w-full h-full"
									src={`https://www.youtube.com/embed/${getVideoId(
										url || ""
									)}`}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="YouTube video player"
								/>
							</div>
						) : (
							<div className="mb-8 aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 shadow-inner">
								<VideoIcon className="w-16 h-16 mb-4 text-gray-500" />
								<p className="text-lg">
									Enter a YouTube URL to get started.
								</p>
							</div>
						)}

						<div className="flex flex-col sm:flex-row gap-4">
							<Input
								type="url"
								placeholder="Paste YouTube URL here"
								value={url || ""}
								onChange={handleUrlChange}
								className="flex-1 h-12 px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
								disabled={isLoading}
								aria-label="YouTube URL"
							/>
							<Button
								disabled={!isValid || isLoading}
								className="h-12 px-6 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
								onClick={handleGenerate}
							>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
										Creating presentation...
									</>
								) : (
									"Create Presentation"
								)}
							</Button>
						</div>
						<p className="text-center text-sm text-gray-500 mt-4">
							Supported formats: YouTube video URLs (e.g,
							https://youtube.com/watch?v=...)
						</p>
					</Card>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}
