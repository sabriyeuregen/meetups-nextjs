import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "",
    address: "Some address 5, 12345 Some City",
    description: "This a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "",
    address: "Some address 15, 12345 Some City",
    description: "This a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
