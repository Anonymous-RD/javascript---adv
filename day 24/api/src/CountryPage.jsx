import React, { useEffect, useState } from "react";
import "./CountryPage.css";
import Skeleton from "./components/Skeleton";
import { IoChevronBack } from "react-icons/io5";

// Small CountUp component — implements its own hooks so parent doesn't call hooks conditionally
function CountUp({ target, duration = 900, suffix = "" }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (typeof target !== "number" || !isFinite(target)) {
      setValue(0);
      return;
    }
    let start = performance.now();
    const from = 0;
    let raf = null;
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const v = Math.round(from + (target - from) * t);
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  return (
    <>
      {value.toLocaleString()}
      {suffix}
    </>
  );
}

function CountryPage() {
  const [country, setCountry] = useState(null);
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Read name from query string
  const name = new URLSearchParams(window.location.search).get("name");

  useEffect(() => {
    if (!name) {
      setError("No country name provided in URL");
      setLoading(false);
      return;
    }

    // read favorite state from localStorage
    try {
      const favs = JSON.parse(localStorage.getItem("fav_countries") || "[]");
      if (favs && Array.isArray(favs)) {
        setFav(favs.includes(name));
      }
    } catch (e) {}

    setLoading(true);
    setError(null);

    async function fetchCountry() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            name
          )}?fullText=true`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // API returns an array; pick the first match
        setCountry(data[0] || null);
      } catch (err) {
        setError(err.message || "Failed to load country data");
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [name]);

  if (loading)
    return (
      <div className="country-page">
        <Skeleton />
      </div>
    );
  if (error) return <div className="country-page">Error: {error}</div>;
  if (!country)
    return <div className="country-page">No country data found.</div>;

  // Helper renderers
  const capital = country.capital ? country.capital.join(", ") : "-";
  const mapsUrl = country.maps?.googleMaps || "";
  const nativeNames = country.name?.nativeName
    ? Object.values(country.name.nativeName)
        .map((n) => n.common)
        .join(", ")
    : "-";
  const borders = country.borders ? country.borders.join(", ") : "-";
  const coat = country.coatOfArms?.png || country.coatOfArms?.svg || "";
  const coords = country.latlng ? country.latlng.join(", ") : "-";
  const tlds = country.tld ? country.tld.join(", ") : "-";
  const codes = `${country.cca2 || ""}${
    country.cca3 ? ` / ${country.cca3}` : ""
  }`;
  const continents = country.continents ? country.continents.join(", ") : "-";
  const car = country.car
    ? `${country.car.signs?.join(", ") || ""} ${
        country.car.side ? `(${country.car.side})` : ""
      }`
    : "-";
  const populationDensity = country.area
    ? Math.round((country.population || 0) / country.area)
    : "-";

  function goBack() {
    window.history.back();
  }

  async function copyMap() {
    if (!mapsUrl) return;
    try {
      await navigator.clipboard.writeText(mapsUrl);
      alert("Map link copied to clipboard");
    } catch (err) {
      prompt("Copy map link:", mapsUrl);
    }
  }

  function toggleFav() {
    setFav((s) => {
      const next = !s;
      try {
        const key = "fav_countries";
        const current = JSON.parse(localStorage.getItem(key) || "[]");
        const set = new Set(current || []);
        if (next) set.add(name);
        else set.delete(name);
        localStorage.setItem(key, JSON.stringify(Array.from(set)));
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  }

  // (CountUp is implemented as a child component above)

  async function shareCountry() {
    const shareData = {
      title: country.name.common,
      text: `Check out ${country.name.common}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.warn("Share failed", err);
    }
  }

  return (
    <div className="country-page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          className="back-btn"
          onClick={goBack}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <IoChevronBack />
          {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "4px" }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> */}
          Back
        </a>
      </div>

      <div className="country-header">
        <div className="flag-wrap">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt || country.name.common}
          />
        </div>
        <div>
          <h3 className="country-title">{country.name.common}</h3>
          <div className="country-sub">{country.name.official}</div>
          <div className="header-accent" />

          {/* <div className="hero-badges">
            <div className="hero-badge">{country.region || "-"}</div>
            <div className="hero-badge">{country.subregion || "-"}</div>
            <div className="hero-badge">{continents}</div>
          </div> */}

          <div className="actions">
            <button className="action-btn" onClick={toggleFav}>
              {fav ? "★ Favorited" : "☆ Favorite"}
            </button>
            <button className="action-btn" onClick={shareCountry}>
              Share
            </button>
            <button className="action-btn" onClick={copyMap}>
              Copy Map
            </button>
          </div>

          <div className="metrics">
            <div className="metric">
              <span className="label">Capital</span>
              <span className="value">{capital}</span>
            </div>
            <div className="metric">
              <span className="label">Population</span>
              <span className="value">
                {country.population ? (
                  <CountUp target={Number(country.population)} />
                ) : (
                  "-"
                )}
              </span>
            </div>
            <div className="metric">
              <span className="label">Region</span>
              <span className="value">{country.region || "-"}</span>
            </div>
            <div className="metric">
              <span className="label">Area</span>
              <span className="value">
                {country.area ? (
                  <CountUp target={Number(country.area)} suffix={" km²"} />
                ) : (
                  "-"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="panel">
          <h4>Timezones</h4>
          <p>{country.timezones ? country.timezones.join(", ") : "-"}</p>

          <h4 style={{ marginTop: 12 }}>Languages</h4>
          <p>
            {country.languages
              ? Object.entries(country.languages).map(([k, v], idx) => (
                  <span key={k} className={`chip ${idx === 0 ? "glow" : ""}`}>
                    {v}
                  </span>
                ))
              : "-"}
          </p>

          <h4 style={{ marginTop: 12 }}>Currencies</h4>
          <p>
            {country.currencies
              ? Object.entries(country.currencies).map(([k, c], idx) => (
                  <span key={k} className={`chip ${idx === 0 ? "glow" : ""}`}>
                    {c.name} {c.symbol ? `(${c.symbol})` : ""}
                  </span>
                ))
              : "-"}
          </p>

          <h4 style={{ marginTop: 12 }}>Native names</h4>
          <p>{nativeNames}</p>

          <h4 style={{ marginTop: 12 }}>Top-level domains</h4>
          <p>{tlds}</p>

          <h4 style={{ marginTop: 12 }}>Borders</h4>
          <p>{borders}</p>

          <h4 style={{ marginTop: 12 }}>Independent</h4>
          <p>{country.independent ? "Yes" : "No"}</p>
        </div>

        <div className="panel">
          <h4>Maps</h4>
          {mapsUrl ? (
            <div>
              <a
                className="map-link"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
              <div style={{ marginTop: 10 }}>
                <button
                  className="back-btn"
                  onClick={copyMap}
                  style={{ padding: "8px 10px" }}
                >
                  Copy map link
                </button>
              </div>
            </div>
          ) : (
            "-"
          )}
          <h4 style={{ marginTop: 14 }}>Other Info</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p>Subregion: {country.subregion || "-"}</p>
            <p>Continent(s): {continents}</p>
            <p>Codes: {codes}</p>
            <p>Coordinates: {coords}</p>
            <p>
              Population density:{" "}
              {populationDensity === "-" ? "-" : `${populationDensity} /km²`}
            </p>
            <p>Car: {car}</p>
            <p>Landlocked: {country.landlocked ? "Yes" : "No"}</p>
            <p>Start of week: {country.startOfWeek || "-"}</p>
            <p>UN member: {country.unMember ? "Yes" : "No"}</p>
          </div>
          {coat ? (
            <div style={{ marginTop: 10 }}>
              <h4>Coat of arms</h4>
              <img src={coat} alt="coat" style={{ maxWidth: "100px" }} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
