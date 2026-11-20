# ============================================================================
# EPI LEARNING 01 | OUTBREAK COUNTS AND REPORTED DISEASE RATES
# Author: Hammad Ur Rehman Bajwa | hrbajwa.github.io
# Version: 1.0 | Educational example using synthetic data ONLY
# Base R (no external packages needed)
# ============================================================================
# GOAL
# Understand why counting outbreak events is different from counting cases,
# and why a denominator and a time period are needed for rate comparisons.
#
# IMPORTANT: These values are invented. They do not describe real regions,
# real surveillance systems, or any confidential outbreak dataset.
# ============================================================================

# STEP 1. Create a tiny synthetic dataset.
# Each row represents ONE fictional region during ONE calendar year.
example <- data.frame(
  region     = c("Region A", "Region B", "Region C", "Region D"),
  outbreaks  = c(4, 7, 2, 5),  # Number of distinct reported outbreak events
  cases      = c(28, 65, 19, 43),  # Reported cases linked to those outbreaks
  population = c(500000, 1500000, 800000, 1100000),
  years      = c(1, 1, 1, 1)
)

# STEP 2. Inspect data before any calculation.
print(example)
stopifnot(
  all(!is.na(example)),
  all(example$population > 0),
  all(example$years > 0),
  all(example$outbreaks >= 0),
  all(example$cases >= 0)
)

# STEP 3. Construct a simple population-time denominator.
# population * years is an approximation to person-years ONLY IF population
# levels are reasonably stable and the epidemiological objective supports it.
# For true individual incidence, actual time at risk is preferable.
example$population_years <- example$population * example$years

# STEP 4. Calculate two different measures.
# (A) Reported case events / population-time; show per 100,000.
example$reported_cases_per_100k_pop_years <- (
  example$cases / example$population_years
) * 100000

# (B) Reported outbreak events / population-time; show per 10 million.
# This is a surveillance EVENT FREQUENCY metric. It is NOT the incidence
# of infections among individuals, and not automatically an unbiased
# estimate of outbreak occurrence in a population.
example$reported_outbreaks_per_10m_pop_years <- (
  example$outbreaks / example$population_years
) * 10000000

# STEP 5. Compare the output. Rounding is for DISPLAY, not calculation.
result <- example[, c(
  "region", "outbreaks", "cases", "population_years",
  "reported_cases_per_100k_pop_years",
  "reported_outbreaks_per_10m_pop_years"
)]
result$reported_cases_per_100k_pop_years <- round(
  result$reported_cases_per_100k_pop_years, 2
)
result$reported_outbreaks_per_10m_pop_years <- round(
  result$reported_outbreaks_per_10m_pop_years, 2
)
print(result, row.names = FALSE)

# STEP 6. Save a table to your current working folder.
# Check where that folder is using getwd().
write.csv(result, "synthetic_counts_and_rates_output.csv", row.names = FALSE)

# STEP 7. Generate a simple, publication-neutral black-and-white plot.
# This plot shows reported CASE frequency, not outbreak frequency.
png("synthetic_reported_case_frequency.png", width = 1200, height = 700, res = 150)
barplot(
  height = result$reported_cases_per_100k_pop_years,
  names.arg = result$region,
  col = "grey55", border = "black",
  main = "Fictional reported case-event frequency by region",
  ylab = "Reported cases per 100,000 population-years",
  xlab = "Fictional region"
)
dev.off()

# OPTIONAL CHECK: Compare your result with these known values from the
# fictional data. This checks arithmetic only; it is not model validation.
stopifnot(
  isTRUE(all.equal(
    unname(result$reported_cases_per_100k_pop_years),
    c(5.60, 4.33, 2.38, 3.91)
  )),
  isTRUE(all.equal(
    unname(result$reported_outbreaks_per_10m_pop_years),
    c(80.00, 46.67, 25.00, 45.45)
  ))
)

# STEP 8. Interpretation questions.
# 1. Does the region with the most outbreaks have the most case events?
# 2. Does ranking by a count match ranking by population-time frequency?
# 3. Could reporting completeness differ between regions?
# 4. What changes if we have only half a year of observation?
# 5. For individual incidence rates, what person-time data would we need?
#
# Recommended foundational reference:
# Dohoo I, Martin W, Stryhn H. Veterinary Epidemiologic Research.
# 2nd ed. VER Inc.; 2009. See measures of disease frequency.
# ============================================================================
