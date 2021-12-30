import React from "react";
import { AnimatePresence, useAnimation } from "framer-motion";
import { capitalize } from "../../libs/capitalize";

// style
import {
  Card,
  TopSection,
  BottomSection,
  MediaSection,
  Image,
  ProfileSection,
  UserProfile,
  UserProfileImage,
  UserInfo,
  Name,
  LCSSection,
  Item,
  PopUp,
  IconSection,
} from "../styles/postCard";

// icon
import { LikeIcon } from "../icons/like";
import { CommentIcon } from "../icons/comment";
import { ShareIcon } from "../icons/share";

export const PostCard: React.FC = ({}) => {
  const [likedAnimation, setLikeAnimation] = React.useState<boolean>(false);
  const [liked, setLiked] = React.useState<boolean>(false);

  const likeAnimation = useAnimation();

  const likedHandel = () => {
    setLiked(!liked);

    if (!liked) {
      likeAnimation.start({
        fill: "#2053c2",
        transition: {
          ease: "easeIn",
          duration: 0.5,
        },
      });
    }

    if (!likedAnimation) {
      setLikeAnimation(true);

      return setTimeout(() => {
        setLikeAnimation(false);
      }, 1000);
    }
  };

  const likeAnimationEndHandel = () => {
    return likeAnimation.start({
      fill: "#2053c2",
      transition: {
        ease: "easeIn",
        duration: 0.5,
        delay: 1.1,
      },
    });
  };

  return (
    <Card>
      <TopSection>
        <MediaSection
          whileHover={{
            scale: 1.3,
            transition: {
              type: "spring",
              stiffness: 300,
            },
          }}
        >
          <Image
            alt="media"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZwQloX6tH9YRFMIpYHJgCQHaFQ%26pid%3DApi&f=1"
          />
        </MediaSection>
        <AnimatePresence>
          {liked && likedAnimation && (
            <PopUp>
              <IconSection
                key="pop-up-icon"
                animate={{
                  opacity: 1,
                  scale: 4,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit={{
                  y: 145,
                  x: 141,
                  scale: 1,
                  transition: {
                    ease: "easeIn",
                    duration: 0.5,
                  },
                }}
              >
                <LikeIcon liked={true} forLike={false} />
              </IconSection>
            </PopUp>
          )}
        </AnimatePresence>
      </TopSection>
      <BottomSection>
        <ProfileSection>
          <UserProfile>
            <UserProfileImage
              alt="user-profile"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.billboard.com%2Ffiles%2Fmedia%2Fjustin-bieber-seasons-2020-jan-u-billboard-1548-1024x677.jpg&f=1&nofb=1"
            />
          </UserProfile>
          <UserInfo>
            <Name>{capitalize("justin bibber")}</Name>
          </UserInfo>
        </ProfileSection>
        <LCSSection>
          <Item
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            <ShareIcon />
          </Item>

          <Item
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            <CommentIcon />
          </Item>

          <Item
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
            onClick={likedHandel}
            onAnimationComplete={() => {}}
          >
            <AnimatePresence>
              <LikeIcon
                liked={liked}
                forLike={true}
                animation={likeAnimation}
                onAnimationEnd={likeAnimationEndHandel}
              />
            </AnimatePresence>
          </Item>
        </LCSSection>
      </BottomSection>
    </Card>
  );
};
