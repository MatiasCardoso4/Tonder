import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Card } from "../../components/Card/Card";
import { CardTypes } from "../../types/CardTypes.ts";
import { SearchingCard } from "../../components/SearchingCard/SearchingCard.tsx";
import { getProfiles } from "../../services/getProfiles.ts";

const fetchedProfiles = async ({setProfiles}: {setProfiles: Dispatch<SetStateAction<CardTypes[]>>}) => {
  const profiles = await getProfiles();
  setProfiles(profiles);
};

export const Matches = () => {
  const [swipe, setSwipe] = useState<string>("");
  const [isRejected, setIsRejected] = useState<string[]>([]);
  const [isLiked, setIsLiked] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [profiles, setProfiles] = useState<CardTypes[]>([]);
  const currentProfile: CardTypes = profiles[currentIndex];

  useEffect(()=> {
    fetchedProfiles({setProfiles})
  },[])

  const handleSwipe = (direction: string, id: string) => {
    setSwipe(direction);

    if (direction === "reject") {
      setIsRejected([...isRejected, id]);
    } else if (direction === "like") {
      setIsLiked([...isLiked, id]);
    }

    setTimeout(() => {
      setSwipe("reset");
    }, 500);

    setTimeout(() => {
      setSwipe("");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1000);
  };

  return (
    <>
      {!currentProfile ? (
        <SearchingCard
          profile={currentProfile}
          swipe={swipe}
          onHandleSwipe={handleSwipe}
        />
      ) : (
        <Card
          key={currentProfile.id}
          profile={currentProfile}
          swipe={swipe}
          onHandleSwipe={handleSwipe}
        />
      )}
    </>
  );
};
