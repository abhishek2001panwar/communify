import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom"; // Import Link component
import { useAuth } from "../context/Authcontext";
import toast, { Toaster } from "react-hot-toast";

function Hero() {
  const { isLoggedIn } = useAuth();

  const notify = () => toast("Please login to add a business");

  return (
    <div>
      <section className="relative ">
        <div className="container mx-auto px-6 py-52 text-center relative z-10">
          <h1 className="text-6xl font-['bellota'] font-light leading-tight">
            Welcome to Communify
          </h1>
          <p className="mt-4 text-xl">
            Connecting local businesses with their community. Discover, support,
            and engage with local businesses around you.
          </p>
          <p className="mt-4 text-lg">
            Discover a wide variety of local businesses and services right at
            your fingertips. From restaurants and cafes to local shops and
            professional services, Communify connects you with the heart of your
            community.
          </p>
          <p className="mt-4 text-lg">
            Whether you're a resident looking to explore new places or a
            business owner aiming to reach more customers, Communify is your
            go-to platform for fostering local connections.
          </p>
          <div className="mt-16 flex justify-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button size="xs" radius="full" color="primary" variant="ghost">
                  <Link to="/bussines"> Explore</Link>
                </Button>
                <Button size="xs" radius="full" color="primary" variant="ghost">
                  <Link to="/addbussiness">Add Business</Link>
                </Button>
              </>
            ) : (
              <>
              
                <Toaster />
                <Link to="/login">
                  <Button

                    
                    size="xs"
                    radius="full"
                    color="primary"
                    variant="ghost"
                  >
                    Explore
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    onClick={notify}
                    size="xs"
                    radius="full"
                    color="primary"
                    variant="ghost"
                  >
                    Add Business
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
