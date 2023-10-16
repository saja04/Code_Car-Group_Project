import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Avatar } from "antd";
import styles from "../user/user.module.css";


const 