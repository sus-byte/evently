import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex justify-between items-center">
				<Link href="/" className="w-36">
					<Image
						src="/assets/images/logo.svg"
						width={128}
						height={38}
						alt="evently logo"
					/>
				</Link>

				<SignedIn>
					<nav className="w-full md:flex-between hidden max-w-xs">
						<NavItems />
					</nav>
				</SignedIn>

				<div className="flex w-32 justify-end gap-3">
					<SignedIn>
						<UserButton />
						<MobileNav />
					</SignedIn>

					<SignedOut>
						<Button asChild className="rounded-full" size="lg">
							<Link href="/sign-in">Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
