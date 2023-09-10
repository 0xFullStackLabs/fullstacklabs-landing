'use client';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function BookPage() {
	const router = useRouter();

	return (
		<Card className="py-4" isPressable onPress={() => router.push('https://web3.fullstacklabs.org/')}>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				{/* <p className="text-tiny uppercase font-bold">Daily Mix</p>
				<small className="text-default-500">12 Tracks</small> */}
				<h4 className="font-bold text-large">Fullstack Web3</h4>
				<small className="text-default-500">web3 development guide</small>

			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src="/images/web3.0.webp"
					width={270}
				/>
			</CardBody>
		</Card>
	);
}
