
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Mail,
  Phone,
  Menu,
  X,
  ExternalLink,
  Palette,
  Copy,
  Check,
} from "lucide-react";

/* =========================================================
   YOUR ACTUAL C PROJECT CODE
   ========================================================= */

const cSourceCode = String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

struct Student {
    int id;
    char name[50];
    int age;
    char course[50];
    float marks;
};

struct Student students[MAX];
int count = 0;

/* Add Student */
void addStudent() {
    if (count >= MAX) {
        printf("\nStudent limit reached!\n");
        return;
    }

    printf("\nEnter Student ID: ");
    scanf("%d", &students[count].id);

    printf("Enter Name: ");
    scanf(" %[^\n]", students[count].name);

    printf("Enter Age: ");
    scanf("%d", &students[count].age);

    printf("Enter Course: ");
    scanf(" %[^\n]", students[count].course);

    printf("Enter Marks: ");
    scanf("%f", &students[count].marks);

    count++;

    printf("\nStudent added successfully!\n");
}

/* Display Students */
void displayStudents() {
    int i;

    if (count == 0) {
        printf("\nNo student records found!\n");
        return;
    }

    printf("\n========== STUDENT RECORDS ==========\n");

    for (i = 0; i < count; i++) {
        printf("\nStudent %d\n", i + 1);
        printf("-----------------------------\n");
        printf("ID     : %d\n", students[i].id);
        printf("Name   : %s\n", students[i].name);
        printf("Age    : %d\n", students[i].age);
        printf("Course : %s\n", students[i].course);
        printf("Marks  : %.2f\n", students[i].marks);
    }
}

/* Search Student */
void searchStudent() {
    int id, i, found = 0;

    printf("\nEnter Student ID to search: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (students[i].id == id) {
            printf("\nStudent Found!\n");
            printf("-----------------------------\n");
            printf("ID     : %d\n", students[i].id);
            printf("Name   : %s\n", students[i].name);
            printf("Age    : %d\n", students[i].age);
            printf("Course : %s\n", students[i].course);
            printf("Marks  : %.2f\n", students[i].marks);

            found = 1;
            break;
        }
    }

    if (!found) {
        printf("\nStudent not found!\n");
    }
}

/* Update Student */
void updateStudent() {
    int id, i, found = 0;

    printf("\nEnter Student ID to update: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (students[i].id == id) {

            printf("\nEnter New Name: ");
            scanf(" %[^\n]", students[i].name);

            printf("Enter New Age: ");
            scanf("%d", &students[i].age);

            printf("Enter New Course: ");
            scanf(" %[^\n]", students[i].course);

            printf("Enter New Marks: ");
            scanf("%f", &students[i].marks);

            printf("\nStudent updated successfully!\n");

            found = 1;
            break;
        }
    }

    if (!found) {
        printf("\nStudent not found!\n");
    }
}

/* Delete Student */
void deleteStudent() {
    int id, i, j, found = 0;

    printf("\nEnter Student ID to delete: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (students[i].id == id) {

            for (j = i; j < count - 1; j++) {
                students[j] = students[j + 1];
            }

            count--;

            printf("\nStudent deleted successfully!\n");

            found = 1;
            break;
        }
    }

    if (!found) {
        printf("\nStudent not found!\n");
    }
}

/* Save Students to File */
void saveStudents() {
    FILE *file;
    int i;

    file = fopen("students.txt", "w");

    if (file == NULL) {
        printf("\nUnable to open file!\n");
        return;
    }

    for (i = 0; i < count; i++) {
        fprintf(file, "%d|%s|%d|%s|%.2f\n",
                students[i].id,
                students[i].name,
                students[i].age,
                students[i].course,
                students[i].marks);
    }

    fclose(file);

    printf("\nRecords saved successfully!\n");
}

/* Load Students from File */
void loadStudents() {
    FILE *file;

    file = fopen("students.txt", "r");

    if (file == NULL) {
        return;
    }

    while (count < MAX &&
           fscanf(file, "%d|%49[^|]|%d|%49[^|]|%f\n",
                  &students[count].id,
                  students[count].name,
                  &students[count].age,
                  students[count].course,
                  &students[count].marks) == 5) {
        count++;
    }

    fclose(file);
}

/* Main Function */
int main() {
    int choice;

    loadStudents();

    while (1) {

        printf("\n\n=====================================\n");
        printf("   STUDENT RECORD MANAGEMENT SYSTEM\n");
        printf("=====================================\n");
        printf("1. Add Student\n");
        printf("2. Display Students\n");
        printf("3. Search Student\n");
        printf("4. Update Student\n");
        printf("5. Delete Student\n");
        printf("6. Save Records\n");
        printf("7. Exit\n");
        printf("=====================================\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                searchStudent();
                break;

            case 4:
                updateStudent();
                break;

            case 5:
                deleteStudent();
                break;

            case 6:
                saveStudents();
                break;

            case 7:
                saveStudents();
                printf("\nThank you for using the system!\n");
                return 0;

            default:
                printf("\nInvalid choice! Please try again.\n");
        }
    }

    return 0;
}`;

const expenseSourceCode = String.raw`import json
import os

FILE_NAME = "expenses.json"


def load_data():
    if os.path.exists(FILE_NAME):
        try:
            with open(FILE_NAME, "r") as file:
                return json.load(file)
        except:
            return []

    return []


def save_data(data):
    with open(FILE_NAME, "w") as file:
        json.dump(data, file, indent=4)


def add_transaction(data):
    print("\n========== ADD TRANSACTION ==========")

    transaction_type = input("Type (income/expense): ").strip().lower()

    if transaction_type not in ["income", "expense"]:
        print("❌ Invalid type! Use income or expense.")
        return

    description = input("Description: ").strip()

    try:
        amount = float(input("Amount: ₹"))
    except ValueError:
        print("❌ Please enter a valid amount.")
        return

    category = input("Category: ").strip()

    transaction = {
        "type": transaction_type,
        "description": description,
        "amount": amount,
        "category": category
    }

    data.append(transaction)
    save_data(data)

    print("\n✅ Transaction added successfully!")


def show_transactions(data):
    print("\n========== TRANSACTIONS ==========")

    if not data:
        print("No transactions found.")
        return

    for i, transaction in enumerate(data, start=1):
        sign = "+" if transaction["type"] == "income" else "-"

        print(
            f"{i}. {transaction['description']} | "
            f"{transaction['category']} | "
            f"{sign}₹{transaction['amount']:.2f}"
        )


def show_summary(data):
    total_income = 0
    total_expense = 0

    for transaction in data:
        if transaction["type"] == "income":
            total_income += transaction["amount"]
        else:
            total_expense += transaction["amount"]

    balance = total_income - total_expense

    print("\n========== FINANCIAL SUMMARY ==========")
    print(f"Total Income   : ₹{total_income:.2f}")
    print(f"Total Expenses : ₹{total_expense:.2f}")
    print(f"Balance        : ₹{balance:.2f}")


def delete_transaction(data):
    show_transactions(data)

    if not data:
        return

    try:
        number = int(input("\nEnter transaction number to delete: "))
    except ValueError:
        print("❌ Invalid number.")
        return

    if 1 <= number <= len(data):
        removed = data.pop(number - 1)
        save_data(data)

        print(
            f"\n🗑️ Deleted: "
            f"{removed['description']} - ₹{removed['amount']:.2f}"
        )
    else:
        print("❌ Transaction not found.")


def search_transactions(data):
    keyword = input("\nEnter description/category to search: ").strip().lower()

    results = []

    for transaction in data:
        if (
            keyword in transaction["description"].lower()
            or keyword in transaction["category"].lower()
        ):
            results.append(transaction)

    print("\n========== SEARCH RESULTS ==========")

    if not results:
        print("No matching transactions found.")
        return

    for i, transaction in enumerate(results, start=1):
        sign = "+" if transaction["type"] == "income" else "-"

        print(
            f"{i}. {transaction['description']} | "
            f"{transaction['category']} | "
            f"{sign}₹{transaction['amount']:.2f}"
        )


def main():
    data = load_data()

    while True:

        print("\n")
        print("==========================================")
        print("          PERSONAL EXPENSE TRACKER")
        print("==========================================")
        print("1. Add Transaction")
        print("2. View Transactions")
        print("3. Financial Summary")
        print("4. Search Transactions")
        print("5. Delete Transaction")
        print("6. Exit")
        print("==========================================")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_transaction(data)

        elif choice == "2":
            show_transactions(data)

        elif choice == "3":
            show_summary(data)

        elif choice == "4":
            search_transactions(data)

        elif choice == "5":
            delete_transaction(data)

        elif choice == "6":
            save_data(data)
            print("\n👋 Thank you for using Personal Expense Tracker!")
            break

        else:
            print("\n❌ Invalid choice! Please try again.")


if __name__ == "__main__":
    main()`;


/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCCode, setShowCCode] = useState(false);
  const [showExpenseCode, setShowExpenseCode] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  const skills = [
    { name: "HTML", type: "Frontend", symbol: "</>" },
    { name: "CSS", type: "Frontend", symbol: "#" },
    { name: "JavaScript", type: "Programming", symbol: "JS" },
    { name: "React", type: "Frontend", symbol: "⚛" },
    { name: "Python", type: "Programming", symbol: "Py" },
    { name: "Java", type: "Programming", symbol: "Ja" },
    { name: "C", type: "Programming", symbol: "C" },
    { name: "SQL", type: "Database", symbol: "DB" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold tracking-tight"
          >
            Sai Kiran Digital World
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-sm text-gray-300 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}

            </div>
          </motion.div>
        )}

      </nav>


      {/* ================= HERO ================= */}

      <main
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32">

          <div className="max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />

              </span>

              Available for creative projects

            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-6xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl"
            >

              I build

              <br />

              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                digital
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                experiences.
              </span>

            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I'm Sai — a developer focused on building modern websites,
              interactive React applications and digital experiences that
              combine clean engineering with strong visual design.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1"
              >
                Explore my work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </a>


              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                Let's talk
              </a>

            </motion.div>


            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-gray-600">

              <span>React</span>
              <span>•</span>
              <span>JavaScript</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>C</span>
              <span>•</span>
              <span>UI / UX</span>

            </div>

          </div>

        </section>

      </main>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="relative border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">

                Turning ideas into

                <span className="text-gray-500">
                  {" "}digital experiences.
                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                I'm a developer who enjoys combining technology and design
                to create websites and applications that feel modern,
                useful and memorable.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                My focus is on writing clean code, learning new technologies
                and turning ideas into polished digital products.
              </p>

            </div>


            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold text-cyan-400">
                  S
                </div>

                <div>

                  <h3 className="font-semibold">
                    Sai Kiran Digital World
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Developer • Designer • Creator
                  </p>

                </div>

              </div>


              <div className="grid grid-cols-2 gap-4">

                <StatCard
                  number="08+"
                  text="Technologies"
                />

                <StatCard
                  number="03"
                  text="Projects"
                />

                <StatCard
                  number="∞"
                  text="Ideas to build"
                />

                <StatCard
                  number="24/7"
                  text="Learning"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="relative border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">

            What I can

            <span className="text-gray-500">
              {" "}build.
            </span>

          </h2>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <ServiceCard
              icon={<Globe size={25} />}
              title="Web Development"
              text="Modern responsive websites using HTML, CSS, JavaScript and React."
            />

            <ServiceCard
              icon={<Code2 size={25} />}
              title="Application Development"
              text="Programming projects and applications using C, Python and Java."
            />

            <ServiceCard
              icon={<Palette size={25} />}
              title="UI / UX Design"
              text="Clean, modern and interactive digital experiences with attention to detail."
            />

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="relative border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills & Technologies
          </p>


          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">

            Tools I use to

            <span className="text-gray-500">
              {" "}build ideas.
            </span>

          </h2>


          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {skills.map((skill, index) => (

              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 font-bold text-cyan-400">
                    {skill.symbol}
                  </div>

                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>

                </div>


                <h3 className="mt-7 text-lg font-semibold">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {skill.type}
                </p>


                <div className="mt-6 h-px w-full bg-white/10">

                  <div className="h-px w-[70%] bg-cyan-400" />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="relative border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Projects
          </p>


          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">

            Things I've

            <span className="text-gray-500">
              {" "}built.
            </span>

          </h2>


          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* PROJECT 1 */}

            <ProjectCard
              number="01"
              title="Birthday Wishes"
              description="A beautiful interactive birthday wishes website created using HTML, CSS and JavaScript."
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
              ]}
              link="https://magnetic-silver-jhsbx3lg.edgeone.dev/"
            />


            {/* PROJECT 2 */}

            <ProjectCard
              number="02"
              title="Student Management System"
              description="A C programming project for managing student records with add, search, update, delete and file storage functionality."
              tags={[
                "C",
                "Programming",
                "CLI",
              ]}
              onViewCode={() => setShowCCode(true)}
            />


            {/* PROJECT 3 */}

            <ProjectCard
              number="03"
              title="Personal Expense Tracker"
              description="A Python expense tracker for adding, viewing, searching, summarizing and deleting income and expense transactions."
              tags={[
                "Python",
                "JSON",
                "CLI",
              ]}
              onViewCode={() => setShowExpenseCode(true)}
            />

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="relative border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Contact
                </p>

                <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">

                  Let's build something

                  <span className="text-gray-500">
                    {" "}great together.
                  </span>

                </h2>


                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  Have an idea, project or website in mind?
                  Let's turn it into a modern digital experience.
                </p>


                <div className="mt-10 flex flex-col gap-4">

                  <a
                    href="mailto:nnsaikiran08@gmail.com"
                    className="flex w-fit items-center gap-4 text-gray-300 hover:text-white"
                  >

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

                      <Mail
                        size={19}
                        className="text-cyan-400"
                      />

                    </span>


                    <span>

                      <span className="block text-xs text-gray-600">
                        Email
                      </span>

                      <span className="text-sm sm:text-base">
                        nnsaikiran08@gmail.com
                      </span>

                    </span>

                  </a>


                  <a
                    href="tel:9059457459"
                    className="flex w-fit items-center gap-4 text-gray-300 hover:text-white"
                  >

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

                      <Phone
                        size={19}
                        className="text-cyan-400"
                      />

                    </span>


                    <span>

                      <span className="block text-xs text-gray-600">
                        Phone
                      </span>

                      <span className="text-sm sm:text-base">
                        9059457459
                      </span>

                    </span>

                  </a>

                </div>

              </div>


              <a
                href="mailto:nnsaikiran08@gmail.com"
                className="group flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
              >

                Start a project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 Sai Kiran Digital World. Built with React.
      </footer>


      {/* =====================================================
          C CODE POPUP
          ===================================================== */}

      {showCCode && (
        <CCodeModal
          code={cSourceCode}
          title="Student Record Management System"
          language="C"
          filename="StudentRecordManagementSystem.c"
          onClose={() => setShowCCode(false)}
        />
      )}

      {showExpenseCode && (
        <CCodeModal
          code={expenseSourceCode}
          title="Personal Expense Tracker"
          language="Python"
          filename="expensetracker.py"
          onClose={() => setShowExpenseCode(false)}
        />
      )}

    </div>
  );
}


/* =========================================================
   STAT CARD
   ========================================================= */

function StatCard({ number, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

      <div className="text-3xl font-bold text-white">
        {number}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   SERVICE CARD
   ========================================================= */

function ServiceCard({
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30"
    >

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {text}
      </p>

    </motion.div>
  );
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  number,
  title,
  description,
  tags,
  link,
  onViewCode,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30"
    >

      {/* Number */}

      <div className="absolute right-6 top-6 text-5xl font-bold text-white/5">
        {number}
      </div>


      <div className="relative">

        {/* Browser Preview */}

        <div className="mb-8 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">

          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

          </div>


          <div className="flex h-[calc(100%-45px)] items-center justify-center">

            <div className="text-center">

              <Code2
                size={42}
                strokeWidth={1.5}
                className="mx-auto text-cyan-400"
              />

              <p className="mt-3 text-sm font-medium text-gray-400">
                {title}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                {tags.join(" • ")}
              </p>

            </div>

          </div>

        </div>


        {/* Project Title */}

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>


        {/* Description */}

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>


        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">

          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}

        </div>


        {/* Buttons */}

        <div className="mt-7 flex flex-wrap gap-3">

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              View Live Project

              <ExternalLink size={16} />

            </a>
          )}


          {onViewCode && (
            <button
              onClick={onViewCode}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <Code2 size={16} />

              View Code

            </button>
          )}

        </div>

      </div>

    </motion.div>
  );
}


/* =========================================================
   C CODE MODAL
   ========================================================= */

function CCodeModal({
  code,
  title = "Source Code",
  language = "Code",
  filename = "source.txt",
  onClose,
}) {
  const [copied, setCopied] = useState(false);

  const lines = code.split("\n");


  const copyCode = async () => {

    try {

      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Copy failed:", error);
    }

  };


  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
      onClick={onClose}
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#080b10] shadow-[0_0_80px_rgba(34,211,238,0.12)]"
      >

        {/* Glow */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />


        {/* Header */}

        <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">

          <div className="flex items-center gap-4">

            {/* C Icon */}

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-bold text-cyan-400">
              {language === "Python" ? "Py" : language}
            </div>


            <div>

              <div className="flex items-center gap-2">

                <h3 className="font-semibold text-white">
                  Student Record Management System
                </h3>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-400">
                  C
                </span>

              </div>


              <p className="mt-1 text-xs text-gray-500">
                {filename}
              </p>

            </div>

          </div>


          {/* Close */}

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400"
          >
            <X size={19} />
          </button>

        </div>


        {/* Browser Bar */}

        <div className="flex items-center gap-2 border-b border-white/5 bg-[#0b0e13] px-5 py-3">

          <span className="h-3 w-3 rounded-full bg-red-400/70" />

          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />

          <span className="h-3 w-3 rounded-full bg-green-400/70" />


          <div className="ml-4 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-gray-600">
            StudentRecordManagementSystem.c
          </div>

        </div>


        {/* Code Area */}

        <div className="relative flex-1 overflow-auto bg-[#06080c]">

          <div className="min-w-max p-6">

            <div className="flex">

              {/* Line Numbers */}

              <div className="select-none pr-6 text-right font-mono text-xs leading-6 text-gray-700">

                {lines.map((_, index) => (
                  <div key={index}>
                    {index + 1}
                  </div>
                ))}

              </div>


              {/* Code */}

              <pre className="font-mono text-[13px] leading-6">

                <code className="text-gray-300">
                  {lines.map((line, index) => (
                    <div key={index}>
                      <CodeLine line={line} />
                    </div>
                  ))}
                </code>

              </pre>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}

        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-5 py-3">

          <div className="flex items-center gap-3 text-xs text-gray-600">

            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            C Source Code

            <span className="text-gray-700">
              •
            </span>

            {lines.length} lines

          </div>


          <button
            onClick={copyCode}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
          >

            {copied ? (
              <>
                <Check size={14} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy Code
              </>
            )}

          </button>

        </div>

      </motion.div>

    </div>
  );
}


/* =========================================================
   SIMPLE C SYNTAX HIGHLIGHTING
   ========================================================= */

function CodeLine({ line }) {

  const trimmed = line.trim();


  if (
    trimmed.startsWith("//") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*")
  ) {
    return (
      <span className="text-gray-600">
        {line || " "}
      </span>
    );
  }


  if (
    trimmed.startsWith("#include") ||
    trimmed.startsWith("#define") ||
    trimmed.startsWith("import ") ||
    trimmed.startsWith("from ")
  ) {
    return (
      <span className="text-purple-400">
        {line || " "}
      </span>
    );
  }


  if (
    trimmed.startsWith("printf") ||
    trimmed.includes("printf(") ||
    trimmed.startsWith("print(") ||
    trimmed.startsWith("input(")
  ) {
    return (
      <span className="text-cyan-300">
        {line || " "}
      </span>
    );
  }


  if (
    trimmed.startsWith("void ") ||
    trimmed.startsWith("int main") ||
    trimmed.startsWith("int ") ||
    trimmed.startsWith("float ") ||
    trimmed.startsWith("FILE ") ||
    trimmed.startsWith("struct ") ||
    trimmed.startsWith("def ") ||
    trimmed.startsWith("class ")
  ) {
    return (
      <span className="text-blue-300">
        {line || " "}
      </span>
    );
  }


  if (
    trimmed.startsWith("return") ||
    trimmed.startsWith("break") ||
    trimmed.startsWith("case") ||
    trimmed.startsWith("default") ||
    trimmed.startsWith("if ") ||
    trimmed.startsWith("elif ") ||
    trimmed.startsWith("else:") ||
    trimmed.startsWith("for ") ||
    trimmed.startsWith("while ")
  ) {
    return (
      <span className="text-purple-300">
        {line || " "}
      </span>
    );
  }


  return (
    <span className="text-gray-300">
      {line || " "}
    </span>
  );
}

  
export default App;