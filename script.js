const jobCards = document.getElementsByClassName("job-card");

const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");
const allTab = document.getElementById("allTab");

const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const availableCount = document.getElementById("availableCount");
let currentTab = "all"; // default tab

// ================= UPDATE COUNTS =================
function updateCounts() {
  let total = 0;
  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < jobCards.length; i++) {
    const status = jobCards[i].getAttribute("data-status");

    if (status !== "deleted") {
      total++;
    }

    if (status === "interview") {
      interview++;
    }

    if (status === "rejected") {
      rejected++;
    }
  }

  totalCount.innerText = total;
  availableCount.innerText = total + " jobs";
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

function filterJobs(type) {
  currentTab = type;

  let visibleCount = 0;

  for (let i = 0; i < jobCards.length; i++) {
    const status = jobCards[i].getAttribute("data-status");

    if (type === "all") {
      if (status !== "deleted") {
        jobCards[i].style.display = "block";
        visibleCount++;
      } else {
        jobCards[i].style.display = "none";
      }
    }

    if (type === "interview") {
      if (status === "interview") {
        jobCards[i].style.display = "block";
        visibleCount++;
      } else {
        jobCards[i].style.display = "none";
      }
    }

    if (type === "rejected") {
      if (status === "rejected") {
        jobCards[i].style.display = "block";
        visibleCount++;
      } else {
        jobCards[i].style.display = "none";
      }
    }
  }

  // update available count
  let total = 0;

  for (let i = 0; i < jobCards.length; i++) {
    if (jobCards[i].getAttribute("data-status") !== "deleted") {
      total++;
    }
  }

  if (type === "all") {
    availableCount.innerText = total + " jobs";
  } else {
    availableCount.innerText = visibleCount + " of " + total + " jobs";
  }

  // ===== EMPTY STATE LOGIC =====
  if (visibleCount === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  updateTabStyle(type);
}

// ================= TAB active or not active STYLE  =================

function updateTabStyle(activeTab) {
  const tabs = [allTab, interviewTab, rejectedTab];

  for (let tab of tabs) {
    //  reset tabs
    tab.classList.remove("bg-blue-600", "text-white");
    tab.classList.remove("bg-white");
    tab.classList.add("bg-white", "text-black");
  }

  // active tab set
  if (activeTab === "all") {
    allTab.classList.remove("bg-white", "text-black");
    allTab.classList.add("bg-blue-600", "text-white");
  }

  if (activeTab === "interview") {
    interviewTab.classList.remove("bg-white", "text-black");
    interviewTab.classList.add("bg-blue-600", "text-white");
  }

  if (activeTab === "rejected") {
    rejectedTab.classList.remove("bg-white", "text-black");
    rejectedTab.classList.add("bg-blue-600", "text-white");
  }
}

// ================= CARD BUTTONS =================
for (let i = 0; i < jobCards.length; i++) {
  const interviewBtn = jobCards[i].querySelector(".interview-btn");
  const rejectedBtn = jobCards[i].querySelector(".rejected-btn");
  const deleteBtn = jobCards[i].querySelector(".delete-btn");
  const badge = jobCards[i].querySelector(".status-badge");

  interviewBtn.addEventListener("click", function () {
    const currentStatus = jobCards[i].getAttribute("data-status");

    if (currentStatus === "interview") {
      jobCards[i].setAttribute("data-status", "all");
      badge.innerText = "NOT APPLIED";

      badge.className =
        "status-badge inline-block mt-2 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-md";
    } else {
      jobCards[i].setAttribute("data-status", "interview");
      badge.innerText = "Interview";

      badge.className =
        "status-badge inline-block mt-2 text-xs bg-green-100 text-green-600 border border-green-600 px-3 py-1 rounded-md";
    }

    updateCounts();
    filterJobs(currentTab);
  });

  rejectedBtn.addEventListener("click", function () {
    const currentStatus = jobCards[i].getAttribute("data-status");

    if (currentStatus === "rejected") {
      jobCards[i].setAttribute("data-status", "all");
      badge.innerText = "NOT APPLIED";

      badge.className =
        "status-badge inline-block mt-2 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-md";
    } else {
      jobCards[i].setAttribute("data-status", "rejected");
      badge.innerText = "Rejected";

      badge.className =
        "status-badge inline-block mt-2 text-xs bg-red-100 text-red-600 border border-red-600 px-3 py-1 rounded-md";
    }

    updateCounts();
    filterJobs(currentTab);
  });

  deleteBtn.addEventListener("click", function () {
    jobCards[i].setAttribute("data-status", "deleted");
    jobCards[i].style.display = "none";

    updateCounts();
    filterJobs(currentTab);
  });
}

// ================= TAB CLICK =================
allTab.addEventListener("click", function () {
  filterJobs("all");
});

interviewTab.addEventListener("click", function () {
  filterJobs("interview");
});

rejectedTab.addEventListener("click", function () {
  filterJobs("rejected");
});

// ================= INITIAL LOAD =================
updateCounts();
filterJobs("all");
