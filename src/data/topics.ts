export type PracticeProblem = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type Topic = {
  id: number;
  title: string;
  theory: string;
  example: {
    question: string;
    solution: string;
  };
  practiceProblems: PracticeProblem[];
};

export const topics: Topic[] = [
  {
    id: 1,
    title: "Individual Energy Levels (Bohr Model)",
    theory: `Niels Bohr proposed that electrons in an atom are organized into specific, stepwise energy levels within the electron cloud. A key aspect of this planetary model is the **quantization of energy**, meaning that energy exists in exact, whole packages. An electron's lowest energy level is closest to the nucleus, and adding quanta of energy moves the electron to more distant levels. For a hydrogen atom, the exact energy of an electron in a given energy level ($n$) is calculated using the formula:

$$E_n = (-2.17 \\times 10^{-18} \\text{ J}) \\left(\\frac{1}{n^2}\\right)$$`,
    example: {
      question: "For a hydrogen atom, calculate the energy of the second energy level ($n=2$).",
      solution: `Using the formula $E_n = (-2.17 \\times 10^{-18} \\text{ J}) \\left(\\frac{1}{n^2}\\right)$:

$$E_2 = (-2.17 \\times 10^{-18} \\text{ J}) \\left(\\frac{1}{2^2}\\right)$$

$$E_2 = -5.43 \\times 10^{-19} \\text{ J}$$`
    },
    practiceProblems: [
      {
        id: "1-1",
        question: "For a hydrogen atom, calculate the energy of the third energy level ($n=3$).",
        options: [
          "$-2.41 \\times 10^{-19} \\text{ J}$",
          "$-7.23 \\times 10^{-19} \\text{ J}$",
          "$-1.09 \\times 10^{-18} \\text{ J}$",
          "$-5.43 \\times 10^{-19} \\text{ J}$"
        ],
        correctAnswerIndex: 0,
        explanation: "$E_3 = (-2.17 \\times 10^{-18} \\text{ J}) / 3^2 = (-2.17 \\times 10^{-18}) / 9 = -2.41 \\times 10^{-19} \\text{ J}$."
      }
    ]
  },
  {
    id: 2,
    title: "Energy Transitions and Light Photons (Bohr Model)",
    theory: `Electrons only radiate or absorb energy when moving from one energy level to another. According to Einstein's theory, a light photon has an energy of $hf$ (where $h$ is Planck's constant and $f$ is the frequency). The emission or absorption of a photon corresponds perfectly to the exact change in an electron's energy level, calculated as:

$$hf = E_{\\text{higher}} - E_{\\text{lower}}$$`,
    example: {
      question: "Determine the difference in energy between the first ($n=1$) and second ($n=2$) energy levels of a hydrogen atom. (Note: The energy of the first level is $-2.17 \\times 10^{-18} \\text{ J}$ and the second is $-5.43 \\times 10^{-19} \\text{ J}$).",
      solution: `Using the formula $E_{\\text{higher}} - E_{\\text{lower}}$:

$$E_{2-1} = (-5.43 \\times 10^{-19} \\text{ J}) - (-2.17 \\times 10^{-18} \\text{ J})$$

$$E_{2-1} = 1.63 \\times 10^{-18} \\text{ J}$$

This represents the exact amount of energy needed to raise a first-level electron to the second level.`
    },
    practiceProblems: [
      {
        id: "2-1",
        question: "Determine the difference in energy between the second ($n=2$) and third ($n=3$) energy levels. (Note: $E_2 = -5.43 \\times 10^{-19} \\text{ J}$ and $E_3 = -2.41 \\times 10^{-19} \\text{ J}$).",
        options: [
          "$3.02 \\times 10^{-19} \\text{ J}$",
          "$7.84 \\times 10^{-19} \\text{ J}$",
          "$1.63 \\times 10^{-18} \\text{ J}$",
          "$1.93 \\times 10^{-19} \\text{ J}$"
        ],
        correctAnswerIndex: 0,
        explanation: "$E_{3-2} = (-2.41 \\times 10^{-19} \\text{ J}) - (-5.43 \\times 10^{-19} \\text{ J}) = 3.02 \\times 10^{-19} \\text{ J}$."
      }
    ]
  },
  {
    id: 3,
    title: "Orbit Radius Ratios (Bohr Model)",
    theory: `In Bohr's model, the physical size of an electron's orbit increases as it moves to higher energy levels. Specifically, the **radius of an orbit is related to the square of the orbit number ($n^2$)**.`,
    example: {
      question: "According to the Bohr model, how many times larger is the second level hydrogen orbit compared to the first level hydrogen orbit?",
      solution: `Because the radius is proportional to the square of the orbit number, you compare $2^2$ to $1^2$.

$$2^2 / 1^2 = 4 / 1 = 4$$

The second level orbit is **4 times** larger.`
    },
    practiceProblems: [
      {
        id: "3-1",
        question: "How many times larger is the third level hydrogen orbit compared to the first level hydrogen orbit?",
        options: [
          "3 times",
          "6 times",
          "9 times",
          "12 times"
        ],
        correctAnswerIndex: 2,
        explanation: "Compare $3^2$ to $1^2$. $9 / 1 = 9$. The third level orbit is 9 times larger."
      }
    ]
  },
  {
    id: 4,
    title: "Nucleon Arithmetic",
    theory: `The nucleus of an atom is an aggregate of **nucleons** (protons and neutrons). The number of protons is the atomic number ($Z$), and the total number of nucleons is the mass number ($A$). To find the number of neutrons ($N$), you subtract the atomic number from the mass number:

$$N = A - Z$$

This is often represented in the complete nuclear symbol:

$$^A_Z\\text{X}$$`,
    example: {
      question: "A nitrogen nucleus is represented by the complete nuclear symbol $^{15}_7\\text{N}$. How many protons and neutrons does this nuclide contain?",
      solution: `The atomic number ($Z$, bottom number) is 7, meaning there are **7 protons**.
The mass number ($A$, top number) is 15.
Using $N = A - Z$:

$$N = 15 - 7 = 8$$

There are **8 neutrons**.`
    },
    practiceProblems: [
      {
        id: "4-1",
        question: "A carbon nucleus is represented by the symbol $^{14}_6\\text{C}$. How many protons and neutrons does it contain?",
        options: [
          "14 protons, 6 neutrons",
          "6 protons, 8 neutrons",
          "8 protons, 6 neutrons",
          "6 protons, 14 neutrons"
        ],
        correctAnswerIndex: 1,
        explanation: "Atomic number $Z = 6$ (6 protons). Mass number $A = 14$. Neutrons $N = 14 - 6 = 8$."
      }
    ]
  },
  {
    id: 5,
    title: "Atomic Weight (Isotopic Abundance)",
    theory: `Nuclei that share the same number of protons but have a different number of neutrons are called **isotopes**. Because naturally occurring elements are mixtures of these isotopes in different abundances, the official atomic weight found on the periodic table is calculated as a **weighted average of its isotopes**.`,
    example: {
      question: "The element boron consists of two isotopes, boron-10 and boron-11. The abundance of boron-10 is 20.0% and the abundance of boron-11 is 80.0%. What is the atomic weight of boron?",
      solution: `Multiply each isotope's mass by its decimal abundance, then add them together:

$$\\text{Atomic weight} = (0.20)(10.0 \\text{ amu}) + (0.80)(11.0 \\text{ amu})$$

$$\\text{Atomic weight} = 2.0 + 8.8 = 10.8 \\text{ amu}$$`
    },
    practiceProblems: [
      {
        id: "5-1",
        question: "Chlorine has two main isotopes: chlorine-35 (75.0% abundance) and chlorine-37 (25.0% abundance). What is the atomic weight of chlorine?",
        options: [
          "36.0 amu",
          "35.5 amu",
          "35.0 amu",
          "36.5 amu"
        ],
        correctAnswerIndex: 1,
        explanation: "$(0.75 \\times 35.0) + (0.25 \\times 37.0) = 26.25 + 9.25 = 35.5 \\text{ amu}$."
      }
    ]
  },
  {
    id: 6,
    title: "Mass Defect and Binding Energy",
    theory: `The total mass of a stable nucleus is remarkably **always less** than the sum of the individual masses of its constituent protons and neutrons. This missing mass is called **mass defect**, and it is converted into **binding energy**. This binding energy is what overcomes the tremendous repulsive force between positively charged protons to hold the nucleus together.`,
    example: {
      question: "Calculate the mass defect of a helium-4 nucleus ($^4_2\\text{He}$), given that the mass of the full nucleus is 4.002603 amu, the mass of a single proton is 1.007825 amu, and the mass of a single neutron is 1.008665 amu.",
      solution: `First, calculate the total mass of the 2 protons and 2 neutrons:

$$(2)(1.008665 \\text{ amu}) + (2)(1.007825 \\text{ amu}) = 4.032980 \\text{ amu}$$

Next, subtract the actual mass of the full helium-4 nucleus from this total:

$$4.032980 \\text{ amu} - 4.002603 \\text{ amu} = \\mathbf{0.030377 \\text{ amu}}$$

The mass defect is 0.030377 amu.`
    },
    practiceProblems: [
      {
        id: "6-1",
        question: "Calculate the mass defect of a lithium-7 nucleus ($^7_3\\text{Li}$), which has 3 protons and 4 neutrons. The mass of the full nucleus is 7.016003 amu. (Proton mass = 1.007825 amu, Neutron mass = 1.008665 amu).",
        options: [
          "0.042132 amu",
          "0.030377 amu",
          "0.051234 amu",
          "0.016003 amu"
        ],
        correctAnswerIndex: 0,
        explanation: "Total parts mass = $3(1.007825) + 4(1.008665) = 3.023475 + 4.034660 = 7.058135 \\text{ amu}$. Mass defect = $7.058135 - 7.016003 = 0.042132 \\text{ amu}$."
      }
    ]
  },
  {
    id: 7,
    title: "Balancing Nuclear Equations",
    theory: `Transmutation occurs when a nucleus changes into a different element, such as during alpha decay (loss of a $^4_2\\text{He}$ nucleus), beta decay (loss of an electron, $^0_{-1}\\text{e}$), fusion, or fission. The strict rule for modeling these reactions is that **the total of the atomic numbers on the left side of the equation must equal the total of the atomic numbers on the right side, and the sum of the mass numbers on the left must equal the sum of the mass numbers on the right**.`,
    example: {
      question: "Complete the following nuclear equation showing the fusion of a hydrogen-2 atom and a hydrogen-3 atom:\n\n$$^2_1\\text{H} + ^3_1\\text{H} \\rightarrow ^4_2\\text{He} + \\text{?}$$",
      solution: `First, calculate the sum of the mass numbers (top) on the left: $2 + 3 = 5$.
Calculate the sum of the atomic numbers (bottom) on the left: $1 + 1 = 2$.

Because the right side must perfectly match, the missing particle must make up the difference alongside the helium ($^4_2\\text{He}$):
Mass number: $5 - 4 = 1$
Atomic number: $2 - 2 = 0$

The particle with a mass of 1 and an atomic number of 0 is a neutron ($^1_0\\text{n}$).
The complete equation is: $^2_1\\text{H} + ^3_1\\text{H} \\rightarrow ^4_2\\text{He} + \\mathbf{^1_0\\text{n}}$`
    },
    practiceProblems: [
      {
        id: "7-1",
        question: "Complete the following nuclear equation for the alpha decay of Uranium-238:\n\n$$^{238}_{92}\\text{U} \\rightarrow ^{234}_{90}\\text{Th} + \\text{?}$$",
        options: [
          "$^0_{-1}\\text{e}$ (Beta particle)",
          "$^4_2\\text{He}$ (Alpha particle)",
          "$^1_0\\text{n}$ (Neutron)",
          "$^1_1\\text{p}$ (Proton)"
        ],
        correctAnswerIndex: 1,
        explanation: "Mass number difference: $238 - 234 = 4$. Atomic number difference: $92 - 90 = 2$. The particle is $^4_2\\text{He}$ (Alpha particle)."
      }
    ]
  },
  {
    id: 8,
    title: "Radioactive Half-Life",
    theory: `Unstable nuclei disintegrate over time at a statistical rate. This is measured by the **half-life**, which is the exact time required for half of the atoms in any given quantity of a radioactive substance to decay. During each successive half-life period, exactly half of the remaining beginning amount decays.`,
    example: {
      question: "4.00 grams of tritium (hydrogen-3) are produced in the lab. The half-life of tritium is 12.3 years. How much of it will remain after 24.6 years?",
      solution: `First, determine how many half-lives have passed by dividing the total time by the half-life duration:

$$24.6 \\text{ years} / 12.3 \\text{ years} = 2 \\text{ half-lives}$$

Because two half-lives have passed, the original amount is halved twice (which is $1/4$ of the original amount):
$4.00 \\text{ grams} / 2 = 2.00 \\text{ grams}$ (after 1st half-life)
$2.00 \\text{ grams} / 2 = \\mathbf{1.00 \\text{ gram}}$ (after 2nd half-life)

1.00 gram will remain.`
    },
    practiceProblems: [
      {
        id: "8-1",
        question: "10.0 grams of a radioactive isotope are produced. Its half-life is 5.0 days. How much will remain after 15.0 days?",
        options: [
          "5.00 grams",
          "2.50 grams",
          "1.25 grams",
          "0.625 grams"
        ],
        correctAnswerIndex: 2,
        explanation: "$15.0 \\text{ days} / 5.0 \\text{ days} = 3 \\text{ half-lives}$. Halve the amount 3 times: $10.0 \\rightarrow 5.0 \\rightarrow 2.5 \\rightarrow 1.25 \\text{ grams}$."
      }
    ]
  }
];
