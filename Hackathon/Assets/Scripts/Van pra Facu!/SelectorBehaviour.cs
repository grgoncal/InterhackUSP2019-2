using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectorBehaviour : MonoBehaviour
{
    [SerializeField]
    private float timer = 0;

    [SerializeField]
    private Vector3[] positions = new Vector3[4];
    [SerializeField]
    private GameObject[] turrets;
    [SerializeField]
    private GameObject[] offlineTurrets;

    private int index = 0;

    public bool isMoving = false;

    private float counter = 0.5f;

    private void Start() {
        positions[0] = new Vector3(transform.position.x+1, transform.position.y, transform.position.z);
        positions[1] = new Vector3(positions[0].x, positions[0].y, positions[0].z-1);
        positions[2] = new Vector3(positions[1].x, positions[1].y, positions[1].z-1);
        positions[3] = new Vector3(positions[2].x, positions[2].y, positions[2].z-1);
    }

    // Update is called once per frame
    void Update()
    {
        if(isMoving)
        {
            timer += Time.fixedDeltaTime;
            if(timer >= counter && index < positions.Length)
            {
                if(index == 2)
                {
                    turrets[0].SetActive(false);
                    offlineTurrets[0].SetActive(true);
                    counter = 1.5f;
                }
                if(index == 3)
                {
                    turrets[0].SetActive(true);
                    offlineTurrets[0].SetActive(false);
                    turrets[1].SetActive(false);
                    offlineTurrets[1].SetActive(true);
                }
                transform.position = positions[index++];
                timer = 0;
            }
        }
    }
}
