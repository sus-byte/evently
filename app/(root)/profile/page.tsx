import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
	const { sessionClaims } = await auth();
	const userId = sessionClaims?.userId as string;

	const params = await searchParams;

	const eventsPage = Number(params?.eventsPage) || 1;

	const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

	return (
		<>
			{/* MY TICKETS */}
			{/* <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
				<div className="wrapper flex items-center justify-center sm:justify-between">
					<h3 className="h3-bold text-center sm:text-left ">My Tickets</h3>
					<Button asChild size={'lg'} className="button hidden sm:flex">
						<Link href={"/#events"}>Explore more events</Link>
					</Button>
				</div>
			</section> */}

			{/* <section className="wrapper my-8">
          <Collection
					data={relatedEvents?.data}
					emptyTitle="No event tickets purchased yet"
					emptyStateSubtext="No worries - plenty of exciting events to explore!"
					collectionType="My_Tickets"
					limit={3}
                  page={1}
                  urlParamName="ordersPage"
					totalPages={2}
				/>
          </section> */}

			{/* EVENTS ORGANIZED */}
			<section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
				<div className="wrapper flex items-center justify-center sm:justify-between">
					<h3 className="h3-bold text-center sm:text-left ">
						Events Organized
					</h3>
					<Button asChild size={"lg"} className="button hidden sm:flex">
						<Link href={"/events/create"}>Create New Event</Link>
					</Button>
				</div>
			</section>

			<section className="wrapper my-8">
				<Collection
					data={organizedEvents?.data}
					emptyTitle="No event have been created yet"
					emptyStateSubtext="Go create some now."
					collectionType="Events_Organized"
					limit={3}
					page={eventsPage}
					urlParamName="eventsPage"
					totalPages={organizedEvents?.totalPages}
				/>
			</section>
		</>
	);
};

export default ProfilePage;
