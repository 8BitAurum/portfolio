<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Project 1",
            icon: "fa-solid fa-cart-shopping",
            description:
                "Lorem ipsum Dolor sit amet.",
            href: ""
        },
        {
            name: "Project 2",
            icon: "fa-solid fa-list-check",
            description:
                "Lorem ipsum Dolor sit amet.",
            href: ""
        },
        {
            name: "Project 3",
            icon: "fa-solid fa-diagram-project",
            description:
                "Lorem ipsum Dolor sit amet.",
            href: ""
        },
    ];

    let benefits = [
        {
            name: "A self taught developer",
            description:
                "I taught myself to code... Lorem ipsum dolor sit amet",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        /*
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
        */
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-1 gap-10 py-8 sm:py-14 px-5"
    > <!--grid cols are set to 1 on large, should change that later for image-->

        <div
            class="flex flex-col lg:justify-center lg:py-[100px] text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[75px]">
                Hello! I'm <span class="poppins text-teal-400">Siva S</span>
                <br />Self taught
                <span class="poppins text-teal-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-teal-400"> favorite tech</span> includes Rust,
                Java, SvelteKit, TailwindCSS and more!
            </p>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <!--
            <img
                src={"images/profile.png"}
                alt="Zetane Engine"
                class="object-cover z-[2] max-h-[70vh]"
            />
            -->
        </div>
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-teal-400">see</span> my work?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-teal-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-teal-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-teal-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins sm:w-4/5 md:w-3/4 lg:w-2/3 px-12 sm:text-xl md:text-2xl lg:text-[20px]">
            My name is Siva, and I go by "8BitAurum" online. I'm currently a university student who loves to tinker with various 
            projects, and see how stuff works under the hood. I play games, read or look up interesting things online during my free time.
            <br><br> A few things about me include: 
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
    </section>
</main>