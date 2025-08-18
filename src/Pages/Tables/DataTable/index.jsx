import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import DefaultDatatable from "../../../Components/Datatable/DefaultDatatable";
import BorderedDatatable from "../../../Components/Datatable/BorderedDatatable";
import ButtonsDatatable from "../../../Components/Datatable/ButtonsDatatable";
import CallbackDatatable from "../../../Components/Datatable/CallbackDatatable";

const DataTable = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    if (activeTab === "2") {
      $(function () {
        let table = $("#example4").DataTable({
          destroy: true,
          ajax: "../assets/vendor/datatable/ajax/objects.txt",
          rowId: "id",
          columns: [
            {
              className: "dt-control",
              orderable: false,
              data: null,
              defaultContent: "",
            },
            { data: "name" },
            { data: "position" },
            { data: "office" },
            { data: "salary" },
          ],
          order: [[1, "asc"]],
          dom: "Blfrtip",
          buttons: ["createState", "savedStates"],
        });

        function format(d) {
          return `<div class="p-3"><strong>Full info:</strong> ${d.name} - ${d.position}</div>`;
        }

        $("#example4 tbody")
          .off("click")
          .on("click", "td.dt-control", function () {
            const tr = $(this).closest("tr");
            const row = table.row(tr);

            if (row.child.isShown()) {
              row.child.hide();
              tr.removeClass("shown");
            } else {
              row.child(format(row.data())).show();
              tr.addClass("shown");
            }
          });

        table.on("stateLoaded", (e, settings, data) => {
          data.childRows.forEach((rowId) => {
            let row = table.row(`#${rowId}`);
            row.child(format(row.data())).show();
          });
        });
      });
    }
  }, [activeTab]);

  return (
    <Container fluid>
      <Row className="m-1">
        <Col xs={12}>
          <h4 className="main-title">Reports</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li>
              <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                Dashboard
              </Link>
            </li>
            <li className="active">
                Reports
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Nav tabs className="order-tabs">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => toggle("1")}
                style={{ cursor: "pointer" }}
              >
                Performance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => toggle("2")}
                style={{ cursor: "pointer" }}
              >
                Conversion
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="mt-3">
            <TabPane tabId="1">
              <Row>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <h5>Performance Datatable</h5>
                      <p>
                        Use <code>$().DataTable()</code> to initialize the
                        table.
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <DefaultDatatable />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <h5>Row Border Bottom Example</h5>
                      <p>
                        Border-bottom styling applied to rows with DataTable.
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <BorderedDatatable />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <h5>Buttons Example</h5>
                      <p>
                        The Buttons extension allows export and other actions.
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <ButtonsDatatable />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <h5>Row Created Callback Example</h5>
                      <p>
                        Example of using a callback to manipulate rows
                        post-creation.
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <CallbackDatatable />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Card>
                <CardHeader>
                  <h5>Conversion Datatable</h5>
                  <p>
                    Expand a row to see more data. Useful when space is limited.
                  </p>
                </CardHeader>
                <CardBody className="p-0">
                  <BorderedDatatable />
                </CardBody>
              </Card>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
};

export default DataTable;
