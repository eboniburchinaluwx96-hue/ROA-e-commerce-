import { Spinner, Stack } from "react-bootstrap";
import { FaClock, FaEnvelope } from "react-icons/fa";

export function GroupedTransaction({
  grouped,
  NOTIF_CONFIG,
  handleClick,
  loading,
}) {
  return Object.entries(grouped).map(([date, items]) => {
    return (
      <>
        {" "}
        {loading ? (
          <Spinner />
        ) : (
          <div key={date}>
            <p
              className="py-4"
              style={{ textTransform: "uppercase", letterSpacing: 1.5 }}
            >
              {date}
            </p>

            {items.map((notif) => {
              const config = NOTIF_CONFIG[notif.type];
              return (
                <div
                  key={notif.id}
                  className={`notif-tab px-md-5 px-3 ${!notif.read ? "py-4 mb-4" : "py-5"}`}
                  onClick={handleClick(notif)}
                  style={{
                    background: !notif.read ? "#423e0565" : "transparent",
                    border: !notif.read ? "1px solid #e4d836" : "",
                    borderBottom: !notif.read ? "" : "1px solid #e4d836",
                  }}
                >
                  {!notif.read && (
                    <FaEnvelope
                      className="notif-read"
                      size={25}
                      style={{ color: "#e4d836" }}
                    />
                  )}
                  {/*Icon */}
                  <Stack
                    direction="horizontal"
                    className="align-items-start gap-4 gap-md-5"
                  >
                    <div
                      className="icon-tab mt-2"
                      style={{ background: config.bg }}
                    >
                      <config.Icon size={25} style={{ color: config.color }} />

                      {config.badge && (
                        <div
                          className="badge-tab"
                          style={{ background: config.badge.bg }}
                        >
                          <config.badge.Icon
                            size={12}
                            style={{ color: "#000" }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="d-flex flex-column">
                      <h3
                        className="text-white fw-bold"
                        style={{ lineHeight: 1.4 }}
                        dangerouslySetInnerHTML={{ __html: notif.title }}
                      />
                      <p className="text-white my-2 mb-3">
                        {notif.description}
                      </p>

                      <small className="d-flex align-items-center gap-2">
                        {" "}
                        <FaClock size={11} />
                        {notif.timeAgo}
                      </small>
                    </div>
                  </Stack>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  });
}
