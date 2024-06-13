import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import axios from "axios";

const Business = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const { data } = await axios.get("/api/v1/user/getusers");

        console.log("API response:", data);

        if (data && Array.isArray(data.users)) {
          const allPosts = data.users.flatMap((user) => user.posts);
          setBusinesses(allPosts);
        } else {
          console.error("Expected an array of users but got:", data);
        }
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };
    fetchBusinesses();
  }, []);

  console.log("Businesses state:", businesses);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center">
          {Array.isArray(businesses) && businesses.length > 0 ? (
            businesses.map((business) => (
              <Card key={business._id} className=" font-['bellota'] max-w-[350px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="business logo"
                    height={40}
                    radius="sm"
                    src={`http://localhost:4000/${business.image}`}
                    width={40}
                    style={{ borderRadius: "sm" }}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{business.title}</p>
                    <p className="text-small text-default-500">
                      {business.location}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{business.description.slice(0,100)}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={`https://maps.google.com/?q=${business.location}`}
                  >
                    Visit location
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No businesses available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Business;
