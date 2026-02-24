const jobCards = document.getElementsByClassName("job-card");

const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");
const allTab = document.getElementById("allTab");

const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const availableCount = document.getElementById("availableCount");

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
